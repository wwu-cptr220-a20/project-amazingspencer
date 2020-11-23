const fs = require('fs');
const path = require('path'); // for referencing correct files
const cheerio = require('cheerio') //for html testing
const inlineCss = require('inline-css'); //for css testing

//absolute path for relative loading (if needed)
const baseDir = 'file://' + path.resolve(__dirname, '../') + '/';

// Testing Structure inspired by previous problem set tests.
// Use of path.resolve from https://stackoverflow.com/questions/63679838/why-wont-fs-readfilesync-detect-my-json-file
// Load "map.html" file once
const htmlPath = '../map.html';
const htmlFile = fs.readFileSync(path.resolve(__dirname, htmlPath), 'utf-8');

// Load CSS file once
const cssPath = '../style/style.css';
const cssFile = fs.readFileSync(path.resolve(__dirname, cssPath), 'utf-8');

describe('Content and HTML is valid.', () => {
  let $; //cheerio instance

  beforeAll(async () => {
    //test CSS by inlining properties and then reading them from cheerio
    let inlined = await inlineCss(htmlFile, { extraCss: cssFile, url: baseDir, removeLinkTags: false });
    $ = cheerio.load(inlined);
  })

  test('1. Includes a header, main, footer, and a navbar.', () => {
    let body = $('body');
    expect(body.children('header').length).toBe(1);                 // has header
    expect(body.children('header').children('nav').length).toBe(1); // has navbar
    expect(body.children('main').length).toBe(1);                   // has main
    expect(body.children('footer').length).toBe(1);                 // has footer
  })

  // Select nav and determine if at least 3 links exist
  test('2. Navbar must contain more than 3 links.', () => {
    let navLinks = $('#navbarNav > ul');
    expect(navLinks.children('li').length).toBeGreaterThan(3);
  })

  // Ensure all favicon images are present
  test('3. Includes a favicon.', () => {
    let faviconLinks = $('.favicon');
    expect(faviconLinks.length).toBe(4);
  })
})


describe('map API is styled and rendered properly', () => {
  let $; //cheerio instance

  beforeAll(async () => {
    //test CSS by inlining properties and then reading them from cheerio
    let inlined = await inlineCss(htmlFile, { extraCss: cssFile, url: baseDir, removeLinkTags: false });
    $ = cheerio.load(inlined);
  })

  test('1. Map has correct proportions', () =>{
    let map = $('.map');

    expect(map.css('width')).toEqual('auto');
    expect(map.css('height')).toEqual('750px');
    expect(map.css('margin')).toEqual('auto');

  })

 
})