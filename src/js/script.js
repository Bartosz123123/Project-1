//MOBILE DROPDOWN================================
//mobile==========================================
const arrowActive = document.querySelector('.arrow-active');
const arrow1 = document.querySelector('.arrow-one');
const arrow2 = document.querySelector('.arrow-two');
const product = document.querySelector('.product');
const templates = document.querySelector('.templates');
const dropdownProduct = document.querySelector('.dropdown-product');
const dropdownTemplates = document.querySelector('.dropdown-templates');
const links = document.querySelector('.links');
const burgerBtn = document.querySelector('.burger-btn');
const navBox = document.querySelector('.nav-desktop');
const additionalBox = document.querySelector('.additional-box');
const workBtn = document.querySelector('.work');
const anytimeBtn = document.querySelector('.anytime');
const subscriptionBtn = document.querySelector('.subscription');
const policyBtn = document.querySelector('.policy');
const workText = document.querySelector('.work-text');
const anytimeText = document.querySelector('.anytime-text');
const subscriptionText = document.querySelector('.subscription-text');
const policyText = document.querySelector('.policy-text');
const workSpin = document.querySelector('.work-spin');
const anytimeSpin = document.querySelector('.anytime-spin');
const subscriptionSpin = document.querySelector('.subscription-spin');
const policySpin = document.querySelector('.policy-spin');

const dropdownZero = document.querySelector('.resources-dropdown-box');
const resourcesLink = document.querySelector('.resources-link');
const dropdownResources = document.querySelector('.resources-first');

const dropdownBoxtest = document.querySelectorAll('dropdown-box');

const dropdownTemplatesBox1 = document.querySelector('.dropdown-box-first');
const dropdownTemplatesBox2 = document.querySelector('.dropdown-box-second');
const dropdownTemplatesBox3 = document.querySelector('.dropdown-box-three');
const dropdownTemplatesBox4 = document.querySelector('.dropdown-box-four');
const dropdownTemplatesBox5 = document.querySelector('.dropdown-box-five');
const dropdownTemplatesBox6 = document.querySelector('.dropdown-box-six');
const dropdownTemplatesBox7 = document.querySelector('.dropdown-box-seven');
const dropdownTemplatesBox8 = document.querySelector('.dropdown-box-eight');

const tDLink1 = document.querySelector('.t-drop-first');
const tDLink2 = document.querySelector('.t-drop-second');
const tDLink3 = document.querySelector('.t-drop-three');
const tDLink4 = document.querySelector('.t-drop-four');
const tDLink5 = document.querySelector('.t-drop-five');
const tDLink6 = document.querySelector('.t-drop-six');
const tDLink7 = document.querySelector('.t-drop-seven');
const tDLink8 = document.querySelector('.t-drop-eight');

const dropdownTemplates1 = document.querySelector('.templates-square-first');
const dropdownTemplates2 = document.querySelector('.templates-square-second');
const dropdownTemplates3 = document.querySelector('.templates-square-three');
const dropdownTemplates4 = document.querySelector('.templates-square-four');
const dropdownTemplates5 = document.querySelector('.templates-square-five');
const dropdownTemplates6 = document.querySelector('.templates-square-six');
const dropdownTemplates7 = document.querySelector('.templates-square-seven');
const dropdownTemplates8 = document.querySelector('.templates-square-eight');

// const accordionBtns = document.querySelectorAll('.accordion-btn');
// const accordionText = document.querySelectorAll('.text-accordion');
// const newa = document.querySelectorAll('.new');

const arrOne = document.querySelector('.fas-one');
const arrTwo = document.querySelector('.fas-two');
const arrThree = document.querySelector('.fas-three');
const arrFour = document.querySelector('.fas-four');
const arrFive = document.querySelector('.fas-five');
const arrSix = document.querySelector('.fas-six');
const arrSeven = document.querySelector('.fas-seven');
const btns = document.querySelectorAll('.templates-link');
const contractPanel = document.querySelector('.contract-panel');
const proposalPanel = document.querySelector('.proposal-panel');
const invoicePanel = document.querySelector('.invoice-panel');
const quotePanel = document.querySelector('.quote-panel');
const scopePanel = document.querySelector('.scope-panel');
const briefPanel = document.querySelector('.brief-panel');
const formPanel = document.querySelector('.form-panel');
const contractBtn = document.querySelector('.contract-btn');
const proposalBtn = document.querySelector('.proposal-btn');
const invoiceBtn = document.querySelector('.invoice-btn');
const quoteBtn = document.querySelector('.quote-btn');
const scopeBtn = document.querySelector('.scope-btn');
const briefBtn = document.querySelector('.brief-btn');
const formBtn = document.querySelector('.form-btn');

const toggleBox = document.querySelector('.toggle-month');
const monthBtn = document.querySelector('.btn-month');
const yearBtn = document.querySelector('.btn-year');
const btnBgc = document.querySelector('.button-background');

const yearCards = document.querySelector('.year-cards');
const monthCards = document.querySelector('.month-cards');

const footerYear = document.querySelector('.footer-year');

// const test = () => {
// 	accordionText.forEach((text) => {
// 		text.classList.toggle('accordion-active');
// 	});
// };

const handleCurrentYear = () => {
	const year = new Date().getFullYear();

	footerYear.innerText = year;
};

const footerDropodownTemplates8 = () => {
	dropdownTemplates8.classList.toggle('is-active-dropdown');
	tDLink8.classList.toggle('link-dropodown-active');
	dropdownTemplates7.classList.remove('is-active-dropdown');
	tDLink7.classList.remove('link-dropodown-active');
	dropdownTemplates6.classList.remove('is-active-dropdown');
	tDLink6.classList.remove('link-dropodown-active');
	dropdownTemplates5.classList.remove('is-active-dropdown');
	tDLink5.classList.remove('link-dropodown-active');
	dropdownTemplates4.classList.remove('is-active-dropdown');
	tDLink4.classList.remove('link-dropodown-active');
	dropdownTemplates3.classList.remove('is-active-dropdown');
	tDLink3.classList.remove('link-dropodown-active');
	dropdownTemplates2.classList.remove('is-active-dropdown');
	tDLink2.classList.remove('link-dropodown-active');
	dropdownTemplates1.classList.remove('is-active-dropdown');
	tDLink1.classList.remove('link-dropodown-active');
	dropdownResources.classList.remove('is-active-dropdown');
	resourcesLink.classList.remove('link-dropodown-active');
};

const footerDropodownTemplates7 = () => {
	dropdownTemplates7.classList.toggle('is-active-dropdown');
	tDLink7.classList.toggle('link-dropodown-active');
	dropdownTemplates8.classList.remove('is-active-dropdown');
	tDLink8.classList.remove('link-dropodown-active');
	dropdownTemplates6.classList.remove('is-active-dropdown');
	tDLink6.classList.remove('link-dropodown-active');
	dropdownTemplates5.classList.remove('is-active-dropdown');
	tDLink5.classList.remove('link-dropodown-active');
	dropdownTemplates4.classList.remove('is-active-dropdown');
	tDLink4.classList.remove('link-dropodown-active');
	dropdownTemplates3.classList.remove('is-active-dropdown');
	tDLink3.classList.remove('link-dropodown-active');
	dropdownTemplates2.classList.remove('is-active-dropdown');
	tDLink2.classList.remove('link-dropodown-active');
	dropdownTemplates1.classList.remove('is-active-dropdown');
	tDLink1.classList.remove('link-dropodown-active');
	dropdownResources.classList.remove('is-active-dropdown');
	resourcesLink.classList.remove('link-dropodown-active');
};

const footerDropodownTemplates6 = () => {
	dropdownTemplates6.classList.toggle('is-active-dropdown');
	tDLink6.classList.toggle('link-dropodown-active');
	dropdownTemplates8.classList.remove('is-active-dropdown');
	tDLink8.classList.remove('link-dropodown-active');
	dropdownTemplates7.classList.remove('is-active-dropdown');
	tDLink7.classList.remove('link-dropodown-active');
	dropdownTemplates5.classList.remove('is-active-dropdown');
	tDLink5.classList.remove('link-dropodown-active');
	dropdownTemplates4.classList.remove('is-active-dropdown');
	tDLink4.classList.remove('link-dropodown-active');
	dropdownTemplates3.classList.remove('is-active-dropdown');
	tDLink3.classList.remove('link-dropodown-active');
	dropdownTemplates2.classList.remove('is-active-dropdown');
	tDLink2.classList.remove('link-dropodown-active');
	dropdownTemplates1.classList.remove('is-active-dropdown');
	tDLink1.classList.remove('link-dropodown-active');
	dropdownResources.classList.remove('is-active-dropdown');
	resourcesLink.classList.remove('link-dropodown-active');
};

const footerDropodownTemplates5 = () => {
	dropdownTemplates5.classList.toggle('is-active-dropdown');
	tDLink5.classList.toggle('link-dropodown-active');
	dropdownTemplates8.classList.remove('is-active-dropdown');
	tDLink8.classList.remove('link-dropodown-active');
	dropdownTemplates7.classList.remove('is-active-dropdown');
	tDLink7.classList.remove('link-dropodown-active');
	dropdownTemplates6.classList.remove('is-active-dropdown');
	tDLink6.classList.remove('link-dropodown-active');
	dropdownTemplates4.classList.remove('is-active-dropdown');
	tDLink4.classList.remove('link-dropodown-active');
	dropdownTemplates3.classList.remove('is-active-dropdown');
	tDLink3.classList.remove('link-dropodown-active');
	dropdownTemplates2.classList.remove('is-active-dropdown');
	tDLink2.classList.remove('link-dropodown-active');
	dropdownTemplates1.classList.remove('is-active-dropdown');
	tDLink1.classList.remove('link-dropodown-active');
	dropdownResources.classList.remove('is-active-dropdown');
	resourcesLink.classList.remove('link-dropodown-active');
};

const footerDropodownTemplates4 = () => {
	dropdownTemplates4.classList.toggle('is-active-dropdown');
	tDLink4.classList.toggle('link-dropodown-active');
	dropdownTemplates8.classList.remove('is-active-dropdown');
	tDLink8.classList.remove('link-dropodown-active');
	dropdownTemplates7.classList.remove('is-active-dropdown');
	tDLink7.classList.remove('link-dropodown-active');
	dropdownTemplates6.classList.remove('is-active-dropdown');
	tDLink6.classList.remove('link-dropodown-active');
	dropdownTemplates5.classList.remove('is-active-dropdown');
	tDLink5.classList.remove('link-dropodown-active');
	dropdownTemplates3.classList.remove('is-active-dropdown');
	tDLink3.classList.remove('link-dropodown-active');
	dropdownTemplates2.classList.remove('is-active-dropdown');
	tDLink2.classList.remove('link-dropodown-active');
	dropdownTemplates1.classList.remove('is-active-dropdown');
	tDLink1.classList.remove('link-dropodown-active');
	dropdownResources.classList.remove('is-active-dropdown');
	resourcesLink.classList.remove('link-dropodown-active');
};

const footerDropodownTemplates3 = () => {
	dropdownTemplates3.classList.toggle('is-active-dropdown');
	tDLink3.classList.toggle('link-dropodown-active');
	dropdownTemplates8.classList.remove('is-active-dropdown');
	tDLink8.classList.remove('link-dropodown-active');
	dropdownTemplates7.classList.remove('is-active-dropdown');
	tDLink7.classList.remove('link-dropodown-active');
	dropdownTemplates6.classList.remove('is-active-dropdown');
	tDLink6.classList.remove('link-dropodown-active');
	dropdownTemplates5.classList.remove('is-active-dropdown');
	tDLink5.classList.remove('link-dropodown-active');
	dropdownTemplates4.classList.remove('is-active-dropdown');
	tDLink4.classList.remove('link-dropodown-active');
	dropdownTemplates2.classList.remove('is-active-dropdown');
	tDLink2.classList.remove('link-dropodown-active');
	dropdownTemplates1.classList.remove('is-active-dropdown');
	tDLink1.classList.remove('link-dropodown-active');
	dropdownResources.classList.remove('is-active-dropdown');
	resourcesLink.classList.remove('link-dropodown-active');
};
const footerDropodownTemplates2 = () => {
	dropdownTemplates2.classList.toggle('is-active-dropdown');
	tDLink2.classList.toggle('link-dropodown-active');
	dropdownTemplates8.classList.remove('is-active-dropdown');
	tDLink8.classList.remove('link-dropodown-active');
	dropdownTemplates7.classList.remove('is-active-dropdown');
	tDLink7.classList.remove('link-dropodown-active');
	dropdownTemplates6.classList.remove('is-active-dropdown');
	tDLink6.classList.remove('link-dropodown-active');
	dropdownTemplates5.classList.remove('is-active-dropdown');
	tDLink5.classList.remove('link-dropodown-active');
	dropdownTemplates4.classList.remove('is-active-dropdown');
	tDLink4.classList.remove('link-dropodown-active');
	dropdownTemplates3.classList.remove('is-active-dropdown');
	tDLink3.classList.remove('link-dropodown-active');
	dropdownTemplates1.classList.remove('is-active-dropdown');
	tDLink1.classList.remove('link-dropodown-active');
	dropdownResources.classList.remove('is-active-dropdown');
	resourcesLink.classList.remove('link-dropodown-active');
};

const footerDropodownTemplates1 = () => {
	dropdownTemplates1.classList.toggle('is-active-dropdown');
	tDLink1.classList.toggle('link-dropodown-active');
	dropdownTemplates8.classList.remove('is-active-dropdown');
	tDLink8.classList.remove('link-dropodown-active');
	dropdownTemplates7.classList.remove('is-active-dropdown');
	tDLink7.classList.remove('link-dropodown-active');
	dropdownTemplates6.classList.remove('is-active-dropdown');
	tDLink6.classList.remove('link-dropodown-active');
	dropdownTemplates5.classList.remove('is-active-dropdown');
	tDLink5.classList.remove('link-dropodown-active');
	dropdownTemplates4.classList.remove('is-active-dropdown');
	tDLink4.classList.remove('link-dropodown-active');
	dropdownTemplates3.classList.remove('is-active-dropdown');
	tDLink3.classList.remove('link-dropodown-active');
	dropdownTemplates2.classList.remove('is-active-dropdown');
	tDLink2.classList.remove('link-dropodown-active');
	dropdownResources.classList.remove('is-active-dropdown');
	resourcesLink.classList.remove('link-dropodown-active');
};

const footerDropodownZero = () => {
	dropdownResources.classList.toggle('is-active-dropdown');
	resourcesLink.classList.toggle('link-dropodown-active');
	dropdownTemplates8.classList.remove('is-active-dropdown');
	tDLink8.classList.remove('link-dropodown-active');
	dropdownTemplates7.classList.remove('is-active-dropdown');
	tDLink7.classList.remove('link-dropodown-active');
	dropdownTemplates6.classList.remove('is-active-dropdown');
	tDLink6.classList.remove('link-dropodown-active');
	dropdownTemplates5.classList.remove('is-active-dropdown');
	tDLink5.classList.remove('link-dropodown-active');
	dropdownTemplates4.classList.remove('is-active-dropdown');
	tDLink4.classList.remove('link-dropodown-active');
	dropdownTemplates3.classList.remove('is-active-dropdown');
	tDLink3.classList.remove('link-dropodown-active');
	dropdownTemplates2.classList.remove('is-active-dropdown');
	tDLink2.classList.remove('link-dropodown-active');
	dropdownTemplates1.classList.remove('is-active-dropdown');
	tDLink1.classList.remove('link-dropodown-active');
};

const handlePolicy = () => {
	policyText.classList.toggle('accordion-active');
	policySpin.classList.toggle('arrow-spin');
};

const handleSubscription = () => {
	subscriptionText.classList.toggle('accordion-active');
	subscriptionSpin.classList.toggle('arrow-spin');
};

const handleAnytime = () => {
	anytimeText.classList.toggle('accordion-active');
	anytimeSpin.classList.toggle('arrow-spin');
};

const handleWork = () => {
	workText.classList.toggle('accordion-active');
	workSpin.classList.toggle('arrow-spin');
};

function navScroll() {
	if (window.scrollY > navBox.offsetTop) {
		additionalBox.classList.add('hide-additional-box');
		navBox.classList.add('add-shadow');
	} else {
		additionalBox.classList.remove('hide-additional-box');
		navBox.classList.remove('add-shadow');
	}
}

const switchCards = () => {
	yearCards.classList.toggle('hide-cards');
	monthCards.classList.toggle('show-cards');
};

const switchMonth = () => {
	btnBgc.classList.toggle('change-of-seats');
	monthBtn.classList.toggle('month-color');
	yearBtn.classList.toggle('year-color');
	switchCards();
};

const resetPanels = () => {
	contractPanel.style.display = 'none';
	proposalPanel.style.display = 'none';
	invoicePanel.style.display = 'none';
	quotePanel.style.display = 'none';
	scopePanel.style.display = 'none';
	briefPanel.style.display = 'none';
	formPanel.style.display = 'none';
	arrSeven.style.display = 'none';
	arrSix.style.display = 'none';
	arrFive.style.display = 'none';
	arrFour.style.display = 'none';
	arrThree.style.display = 'none';
	arrTwo.style.display = 'none';
	arrOne.style.display = 'none';
};

const showForm = () => {
	resetPanels();
	formPanel.style.display = 'flex';
	arrSeven.style.display = 'block';
};
const showBrief = () => {
	resetPanels();
	briefPanel.style.display = 'flex';
	arrSix.style.display = 'block';
};
const showScope = () => {
	resetPanels();
	scopePanel.style.display = 'flex';
	arrFive.style.display = 'block';
};
const showQuote = () => {
	resetPanels();
	quotePanel.style.display = 'flex';
	arrFour.style.display = 'block';
};
const showInvoice = () => {
	resetPanels();
	invoicePanel.style.display = 'flex';
	arrThree.style.display = 'block';
};

const showProposal = () => {
	resetPanels();
	proposalPanel.style.display = 'flex';
	arrTwo.style.display = 'block';
};

const showContract = () => {
	resetPanels();
	contractPanel.style.display = 'flex';
	arrOne.style.display = 'block';
};

const addCheckOnLink = (e) => {
	removeCheckOnLink();
	e.target.classList.add('active-panel');
};

const removeCheckOnLink = () => {
	btns.forEach((btn) => {
		btn.classList.remove('active-panel');
	});
};

const showProduct = () => {
	dropdownProduct.classList.toggle('active-dorpdown');
	arrow1.classList.toggle('arrow-active');
	product.classList.toggle('link-color');
};

const showTemplates = () => {
	dropdownTemplates.classList.toggle('active-dorpdown');
	arrow2.classList.toggle('arrow-active');
	templates.classList.toggle('link-color');
};

const hideDropdown = () => {
	dropdownProduct.classList.add('active-dorpdown');
	dropdownTemplates.classList.add('active-dorpdown');
};

const resetProdAndTemp = () => {
	dropdownProduct.classList.add('active-dorpdown');
	dropdownTemplates.classList.add('active-dorpdown');
	product.classList.remove('link-color');
	arrow1.classList.remove('arrow-active');
	arrow2.classList.remove('arrow-active');
	templates.classList.remove('link-color');
};

const handleLinks = () => {
	links.classList.toggle('active-links');
	resetProdAndTemp();
};

burgerBtn.addEventListener('click', handleLinks);
product.addEventListener('click', showProduct);
templates.addEventListener('click', showTemplates);
btns.forEach((btn) => btn.addEventListener('click', addCheckOnLink));
contractBtn.addEventListener('click', showContract);
proposalBtn.addEventListener('click', showProposal);
invoiceBtn.addEventListener('click', showInvoice);
quoteBtn.addEventListener('click', showQuote);
scopeBtn.addEventListener('click', showScope);
briefBtn.addEventListener('click', showBrief);
formBtn.addEventListener('click', showForm);
toggleBox.addEventListener('click', switchMonth);
workBtn.addEventListener('click', handleWork);
anytimeBtn.addEventListener('click', handleAnytime);
subscriptionBtn.addEventListener('click', handleSubscription);
policyBtn.addEventListener('click', handlePolicy);
// accordionBtns.forEach((btn) => btn.addEventListener('click', test));
dropdownZero.addEventListener('click', footerDropodownZero);
dropdownTemplatesBox1.addEventListener('click', footerDropodownTemplates1);
dropdownTemplatesBox2.addEventListener('click', footerDropodownTemplates2);
dropdownTemplatesBox3.addEventListener('click', footerDropodownTemplates3);
dropdownTemplatesBox4.addEventListener('click', footerDropodownTemplates4);
dropdownTemplatesBox5.addEventListener('click', footerDropodownTemplates5);
dropdownTemplatesBox6.addEventListener('click', footerDropodownTemplates6);
dropdownTemplatesBox7.addEventListener('click', footerDropodownTemplates7);
dropdownTemplatesBox8.addEventListener('click', footerDropodownTemplates8);

hideDropdown();
handleCurrentYear();
window.addEventListener('scroll', navScroll);
