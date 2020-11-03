const fs = require('fs');
const cheerio = require('cheerio') //for html testing
const inlineCss = require('inline-css'); //for css testing

//absolute path for relative loading (if needed)
const baseDir = 'file://' + __dirname + '/';

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

// Testing Structure inspired by previous problem set tests.
// Load HTML file once
const htmlPath = __dirname + '/index.html';
const htmlFile = fs.readFileSync(htmlPath, 'utf-8');
// Load CSS file once
const cssPath = __dirname + '/style/style.css';
const cssFile = fs.readFileSync(cssPath, 'utf-8');

describe('Content and HTML is valid', () => {
  let $; //cheerio instance

  beforeAll(async () => {
    //test CSS by inlining properties and then reading them from cheerio
    let inlined = await inlineCss(htmlFile, { extraCss: cssFile, url: baseDir, removeLinkTags: false });
    $ = cheerio.load(inlined);
  })

  test('1. Includes 3 images on home page.', () => {
    // Select and determine if an image exists within each section
    let overviewFigure = $('#overview > figure');
    expect(overviewFigure.children('img').length).toBe(1);

    let careFigure = $('#care > figure');
    expect(careFigure.children('img').length).toBe(1);

    let timelineFigure = $('#timeline > figure');
    expect(timelineFigure.children('img').length).toBe(1);
  })

  // test('2. Includes a header, main, footer, and a navbar on all pages.', () => {
  //   let htmlFiles = fs.readdirSync(__dirname).filter((f) => f.endsWith('.html')); // reuse same variable from above
  //   for (let f of htmlFiles) {
  //     let body = $('html > body');
  //     expect(body.children('header').length).toBe(1); // has header
  //     expect(body.children('header').children('nav').length).toBe(1); // has navbar
  //     expect(body.children('main').length).toBe(1); // has main
  //     expect(body.children('footer').length).toBe(1); // has footer
  //   }
  // })
})