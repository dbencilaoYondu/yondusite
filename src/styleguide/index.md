# The Grid

<p class="lead">Problem: You've got tons of content, each needing different sized vertical columns, and don't know how to quick and easily get it all done. Solution: The awesome grid!</p>




# Colors

<p class="lead">Below you can find the different values we created that support the primary color variable you can change at any time in <code>\_settings.scss</code></p>

---

<div class="row up-1 medium-up-3 large-up-5">
  <div class="column">
    <div class="color-block">
      <span style="background: #46c0a8"></span>
      #46c0a8
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #4a5a70"></span>
      #4a5a70
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #1e1e1e"></span>
      #1e1e1e
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #6c727a"></span>
      #6c727a
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #868686"></span>
      #868686
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #d7d7d7"></span>
      #d7d7d7
    </div>
  </div>
</div>



# Typography

<p class="lead">This design uses Helvetica Neue for headings and paragraph text.</p>

---

## Headings

Headings are used to denote different sections of content, usually consisting of related paragraphs and other HTML elements. They range from h1 to h6 and should be styled in a clear hierarchy (i.e., largest to smallest)

---

<h1 class="main-title">Heading Level 1</h1>

Title pages

<h2 class="main-title__sub">Heading Level 2</h2>

sub Title content

---

# Buttons

<p class="lead">Buttons are tied to an action of some kind, whether that button is on a cheese dispenser or launches the rocket that you're strapped to. On the web, we follow similar conventions.</p>

---

## Primary Buttons

These buttons are primary calls to action and should be used sparingly. Their size can be adjusted with the `.tiny`, `.small`, and `.large` classes.

```html_example
<a href="#" class="large button button--blue">Large button</a>
<a href="#" class="button button--blue">Regular button</a>
<a href="#" class="small button button--blue">Small button</a>
<a href="#" class="tiny button button--blue">Tiny button</a>
```

---

## Secondary Buttons

These buttons are used for less important, secondary actions on a page.

```html_example
<a href="#" class="large button button--navy">Large button</a>
<a href="#" class="button button--navy">Regular button</a>
<a href="#" class="small button button--navy">Small button</a>
<a href="#" class="tiny button button--navy">Tiny button</a>
```
## Secondary Buttons

These buttons are used for less important, secondary actions on a page.

```html_example
<a href="#" class="large button button--gray">Large button</a>
<a href="#" class="button button--gray">Regular button</a>
<a href="#" class="small button button--gray">Small button</a>
<a href="#" class="tiny button button--gray">Tiny button</a>
```



# Forms

<p class="lead">Use forms to allow users to interact with the site and provide information to the company.</p>

---

## Elements of a Form

A form should be marked up using its default HTML properties. The ones we make use of include (in hierarchical order):

- Form
- Label
- Input
- Select
- Text area
- Button

---


## Form Example

```html_example
<form class="cms-form">
  <div class="row">
    <div class="small-2 columns">
      <label for="middle-label1" class="text-left middle cms-form__label" >asdasLabel</label>
    </div>
    <div class="small-5 columns end cms-form__input is-correct">
      <input type="text" id="middle-label1" placeholder="Right- and middle-aligned text input" disabled>
    </div>
  </div>
  <div class="row">
    <div class="small-2 columns ">
      <label for="middle-label2" class="text-left middle">asdasLabel</label>
    </div>
    <div class="small-5 columns end  cms-form__input is-wrong">
      <input type="text" id="middle-label2" placeholder="Right- and middle-aligned text input">
    </div>
  </div>
  <div class="row">
    <div class="small-2 columns">
      <label for="middle-label3" class="text-left middle">asdasLabel</label>
    </div>
    <div class="small-5 columns end cms-form__input is-focus">
      <input type="text" id="middle-label3" placeholder="Right- and middle-aligned text input">
    </div>
  </div>
  <div class="row">
    <div class="small-2 columns">
      <label for="middle-label4" class="text-left middle">asdasLabel</label>
    </div>
    <div class="small-5 columns end">
      <input type="text" id="middle-label4" placeholder="Right- and middle-aligned text input">
    </div>
  </div>
  <div class="row">
    <div class="small-2 columns">
      <label for="middle-label5" class="text-left middle">asdasLabel</label>
    </div>
    <div class="small-5 columns end">
      <input type="text" id="middle-label5" placeholder="Right- and middle-aligned text input">
    </div>
  </div>
  <div class="row">
    <div class="small-2 columns">
      <label for="middle-label6" class="text-left middle">asdasLabel</label>
    </div>
    <div class="small-5 columns end">
      <input type="text" id="middle-labe6" placeholder="Right- and middle-aligned text input">
    </div>
  </div>
  <div class="row">
    <div class="large-6 columns">
      <label>Label</label>
      <input type="text" placeholder="placeholder">
    </div>
    <div class="large-6 columns">
      <div class="row collapse">
        <label>Label</label>
        <div class="input-group">
          <input class="input-group-field" type="text" placeholder="placeholder">
          <span class="input-group-label">.com</span>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="large-12 columns">
      <label>Select Box</label>
      <select>
        <option value="good">Good</option>
        <option value="better">Better</option>
        <option value="best">Best</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="large-6 columns">
      <label>Choose Your Favorite</label>
      <input type="radio" name="radio1" value="radio1" id="radio1"><label for="radio1">Red</label>
      <input type="radio" name="radio2" value="radio2" id="radio2"><label for="radio2">Blue</label>
    </div>
    <div class="large-6 columns">
      <label>Check these out</label>
      <input id="checkbox1" type="checkbox"><label for="checkbox1">Checkbox 1</label>
      <input id="checkbox2" type="checkbox"><label for="checkbox2">Checkbox 2</label>
    </div>
  </div>
  <div class="row">
    <div class="large-12 columns">
      <label>Textarea Label</label>
      <textarea placeholder="placeholder"></textarea>
    </div>
  </div>
</form>
```



# New Section

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora omnis suscipit id ut laborum recusandae molestias hic aliquid **expedita!** [Non dicta](zurb.com), autem obcaecati error, id ab voluptate unde culpa nulla.

```html_example
<a href="#" class="button">Button</a>`
<a href="#" class="button">Button</a>
<a href="#" class="button">Button</a>
```
