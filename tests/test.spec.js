const fs = require('fs');

//include custom matchers
const styleMatchers = require('jest-style-matchers');
expect.extend(styleMatchers);

describe('Source code is valid', () => {
  test('HTML validates without errors', async () => {
    const lintOpts = {
      'attr-bans': ['align', 'background', 'bgcolor', 'border', 'frameborder', 'marginwidth', 'marginheight', 'scrolling', 'style', 'width', 'height'], //adding height, allow longdesc
      'tag-bans': ['style', 'b'], //<i> allowed for font-awesome
      'doctype-first': true,
      'doctype-html5': true,
      'html-req-lang': true,
      'attr-name-style': false, //for meta tags
      'line-end-style': false, //either way
      'indent-style': false, //can mix/match
      'indent-width': false, //don't need to beautify
      'id-class-style': false, //I like dashes in classnames
      'img-req-alt': true
    }

    const htmlfiles = fs.readdirSync(__dirname).filter((f) => f.endsWith('.html'));
    for (let f of htmlfiles) {
      await expect(f).toHaveNoHtmlLintErrorsAsync(lintOpts);
    }
  })

  test('CSS validates without errors', async () => {
    await expect('css/*.css').toHaveNoCssLintErrorsAsync(); //test all files in css folder
  })

  test('JavaScript lints without errors', () => {
    if (fs.existsSync(__dirname + '/js')) {
      const jsfiles = fs.readdirSync(__dirname + '/js').filter((f) => f.endsWith('.js'));

      for (let f of jsfiles) {
        expect(['js/' + f]).toHaveNoEsLintErrors();
      }
    }
  })
});

describe('Style and CSS is valid.', () => {
  let $; //cheerio instance

  beforeAll(async () => {
    //test CSS by inlining properties and then reading them from cheerio
    let inlined = await inlineCss(htmlFile, { extraCss: cssFile, url: baseDir, removeLinkTags: false });
    $ = cheerio.load(inlined);
  })

  // Ensure navbar is colored properly
  test('1. Navbars are all colored: #0d47a1.', () => {
    let navBar = $('.navbar');
    expect(navBar.css('background-color')).toEqual('#0d47a1');
  })

  // Ensure correct font is used
  test('2. Body text is Roboto and <h1> headings have font weight of 900.', () => {
    let body = $('body');
    let primaryHeadings = $('h1');
    expect(body.css('font-family')).toEqual('\'Roboto\', sans-serif');
    expect(primaryHeadings.css('font-weight')).toEqual('900');
  })

  // Parallax section is styled
  test('3. Parallax section styled properly.', () => {
    // Ensure image is styled appropriately to achieve parallax effect
    let parallaxContainer = $('.parallax-section');
    expect(parallaxContainer.css('background-attachment')).toEqual('fixed');
    expect(parallaxContainer.css('background-position')).toEqual('center');
    expect(parallaxContainer.css('background-repeat')).toEqual('no-repeat');
    expect(parallaxContainer.css('background-size')).toEqual('cover');
    expect(parallaxContainer.css('position')).toEqual('relative');

    // Ensure headings are styled appropriately
    let parallaxHeadings = $('.parallax-section');
    expect(parallaxHeadings.children('h1').css('color')).toEqual('white');
    expect(parallaxHeadings.children('h1').css('top')).toEqual('50%');
    expect(parallaxHeadings.children('h1').css('left')).toEqual('50%');
    expect(parallaxHeadings.children('h1').css('margin-right')).toEqual('-50%');
    expect(parallaxHeadings.children('h1').css('transform')).toEqual('translate(-50%, -50%)');

    expect(parallaxHeadings.children('h2').css('color')).toEqual('white');
    expect(parallaxHeadings.children('h2').css('top')).toEqual('60%');  
    expect(parallaxHeadings.children('h2').css('left')).toEqual('40%');
    expect(parallaxHeadings.children('h2').css('margin-right')).toEqual('-50%');
    expect(parallaxHeadings.children('h2').css('transform')).toEqual('translate(0, -50%)');
  })

  // About page is styled appropriately
  test('4. About section styled properly with cards.', () => {
    
  })
})