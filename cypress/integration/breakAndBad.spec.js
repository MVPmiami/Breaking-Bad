describe("test BB app", ()=> {
	it("renders correctly home component", () => {
		cy.visit("/");
		cy.get("[data-test-homePage = homePage ]");
	})

	it("renders correctly header component", () => {
		cy.visit("/");
		cy.get("header");
	})

	it("renders correctly footer component", () => {
		cy.visit("/");
		cy.get("footer");
	})

	it("check btn to catalog", () => {
		cy.visit("/");
		cy.get("[data-test-catalogBTN = catalogBTN]").click();
		cy.location("pathname").should("eq", "/catalog")
	})

	it("check btn to homePage", () => {
		cy.visit("/catalog");
		cy.get("header").find("a:first-child").click();
		cy.location("pathname").should("eq", "/")
	})

	it("check input", () => {
		cy.visit("/catalog");
		cy.get("input").type("Walter").type("{enter}");
	})
})

describe("test catalogBtn", ()=> {

	it("check btn to catalog", () => {
		cy.visit("/");
		cy.get("[data-test-catalogBTN = catalogBTN]").click();
		cy.location("pathname").should("eq", "/catalog")
	})

	it("check btn to homePage", () => {
		cy.visit("/catalog");
		cy.get("header").find("a:first-child").click();
		cy.location("pathname").should("eq", "/")
	})
})

describe("check input", ()=> {
	it("check input", () => {
		cy.visit("/catalog");
		cy.get("input").type("Walter").type("{enter}")
    cy.get("[data-test-cards=cards] > a").should("have.length", 2);
		cy.get("[data-test-arrBackBtn = arrBackBtn]").click();
		cy.get("[data-test-cards=cards] > a").should("have.length", 5);
	})
})

describe("check grid or list style for cards", ()=> {
	it("check correctly render list", () => {
		cy.visit("/catalog");
		cy.get("[data-test-toList = toList]").click();
	})

		it("check correctly render grid", () => {
		cy.visit("/catalog");
		cy.get("[data-test-toList = toList]").click();
		cy.get("[data-test-toGrid = toGrid]").click();
	})
})

describe("check FullCard component", ()=> {
	it("check correctly render fullcard", () => {
		cy.visit("/catalog");
		cy.get("[href='/person/1']").click();
		cy.location("pathname").should("eq", "/person/1")
	})
})

describe("check showCards component", ()=> {
	it("check correctly render cards", () => {
		cy.visit("/catalog");
		cy.get("[data-test-showBtn = show-10").click();
		cy.get("[data-test-cards=cards] > a").should("have.length", 10);
	})
})

describe("check pagination ", ()=> {
	it("check correctly work pagination", () => {
		cy.visit("/catalog");
		cy.get("[data-test-pageNumBtn = pageNumBtn-2]").click();
		cy.get("[href='/person/6']").find("div").find("div").contains("Marie Schrader")
	})
})