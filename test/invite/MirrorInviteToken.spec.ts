import { expect } from "chai";
import { ethers } from "hardhat";

import setup from "../setup";

describe("MirrorInviteToken", () => {
	let mirrorInviteToken;
	let mirrorENSRegistrar;
	let ensRegistry;
	let reverseRegistrar;
	let mirrorENSResolver;

	let owner;
	let account1;
	let account2;
	let account3;

	beforeEach(async () => {
		[
			mirrorInviteToken, mirrorENSRegistrar, ensRegistry, reverseRegistrar, mirrorENSResolver
		] = await setup();

		[owner, account1, account2, account3] = await ethers.getSigners();
	});

	describe("deployed", () => {
		it("has the correct name", async () => {
			const name = await mirrorInviteToken.name();
			expect(name).to.eq("Mirror Invite Token");
		});

		it("has the correct token symbol", async () => {
			const symbol = await mirrorInviteToken.symbol();
			expect(symbol).to.eq("WRITE");
		});

		it("has the correct number of decimals", async () => {
			const decimals = await mirrorInviteToken.decimals();
			expect(decimals.toString()).to.eq("18");
		});

		it("has the correct registrar", async () => {
			const registrar = await mirrorInviteToken.ensRegistrar();
			expect(registrar).to.eq(mirrorENSRegistrar.address);
		});
	});

	describe("#mint", () => {
		describe("when called by the owner to be given to another account", () => {
			let accountToReceive;
			let accountNotToReceive;

			beforeEach(async () => {
				accountToReceive = account1;
				accountNotToReceive = account2;

				await mirrorInviteToken.connect(owner).mint(account1.address, 1);
			});

			it("mints a token for the account", async () => {
				const accountBalance = await mirrorInviteToken.balanceOf(accountToReceive.address);
				expect(accountBalance.toString()).to.equal("1");
			});

			it("other accounts still have 0 balance", async () => {
				const accountBalance = await mirrorInviteToken.balanceOf(accountNotToReceive.address);
				expect(accountBalance.toString()).to.equal("0");
			});
		});

		describe("when called by a non-owner to be given to another account", () => {
			let nonOwner;
			let accountIntendedToReceive;
			let transaction;

			beforeEach(async () => {
				nonOwner = account1;
				accountIntendedToReceive = account2;
			});

			it("reverts the transaction", async () => {
				transaction = mirrorInviteToken.connect(nonOwner).mint(accountIntendedToReceive.address, 1);
				await expect(transaction).to.be.revertedWith('Ownable: caller is not the owner');
			});

			it("the accounts all still have 0 balance", async () => {
				const accountBalance = await mirrorInviteToken.balanceOf(accountIntendedToReceive.address);
				expect(accountBalance.toString()).to.equal("0");
			});
		});
	});

	describe("#setENSRegistrar", () => {
		describe("when called by the owner", () => {
			it("updates the registrar appropriately", async () => {
				// Set it to a new address, and check that it updated correctly.
				const newAddress = "0xC85Ef1106632B9e7F8DE9cE0c0f1de1F70E67694";
				await mirrorInviteToken.connect(owner).setENSRegistrar(newAddress);

				expect(
					await mirrorInviteToken.ensRegistrar()
				).to.eq(newAddress);

				// Set it back to the actual registrar, and check that it updated correctly again.
				await mirrorInviteToken.connect(owner).setENSRegistrar(mirrorENSRegistrar.address);
				expect(
					await mirrorInviteToken.ensRegistrar()
				).to.eq(mirrorENSRegistrar.address);
			})
		});

		describe("when called by a non-owner account", () => {
			it("it reverts the transaction", async () => {
				// Set it to a new address, and check that it updated correctly.
				const newAddress = "0xC85Ef1106632B9e7F8DE9cE0c0f1de1F70E67694";
				const transaction = mirrorInviteToken.connect(account1).setENSRegistrar(newAddress);
				await expect(transaction).to.be.revertedWith('Ownable: caller is not the owner');

				// Original registrar still set.
				expect(
					await mirrorInviteToken.ensRegistrar()
				).to.eq(mirrorENSRegistrar.address);
			})
		})
	});

	describe("#register", () => {
		describe("when the account does not have an invite token", () => {
			it("reverts the transaction", async () => {
				const transaction = mirrorInviteToken.connect(account1).register("test", account1.address);
				await expect(transaction).to.be.revertedWith('ERC20: burn amount exceeds balance');
			});
		});

		describe("when the account has an invite token", () => {
			let transaction;
			let receipt;
			let create2Address;

			beforeEach(async () => {
				const label = "test";
				await mirrorInviteToken.connect(owner).mint(account1.address, 1);
				transaction = await mirrorInviteToken.connect(account1).register(
					"test",
					account1.address
				);
				receipt = await transaction.wait();
			});

			it("burns the user's token", async () => {
				const accountBalance = await mirrorInviteToken.balanceOf(account1.address);
				expect(accountBalance.toString()).to.equal("0");
			});

			it("registers the requested ENS label and assigns ownership to the owner", async () => {
				const subdomainOwner = await ensRegistry.owner(ethers.utils.namehash('test.mirror.xyz'))
				expect(subdomainOwner).to.eq(account1.address);
			});

			it("allows for reverse resolving", async () => {
				const node = await reverseRegistrar.node(account1.address);
				const name = await mirrorENSResolver.name(node);
				expect(name).to.eq("test.mirror.xyz");
			});

			it("uses 142331 gas", () => {
				const { gasUsed } = receipt;
				expect(gasUsed).to.eq(142331);
			});
		});
	});
});