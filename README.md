# Selectasaur

Selectasaur lets you have customized `select` targets. It will wrap select tags up in stylable boxes while retaining native popovers. Heavily inspired by [Uniform.js](https://github.com/pixelmatrix/uniform).

## Usage

### Javascript

```js
$('select').selectasaur({});
```

### HTML

```html
<select>
  <option value="">Select a dinosaur...</option>
  <option>Breviceratops</option>
  <option>Charonosaurus</option>
  <option>Liaoceratops</option>
  <option>Mapusaurus</option>
</select>
```
### CSS

```css
.ss-enabled {
  position: absolute;
  opacity: 0;
  height: 25px; /* adjust manually for best hit state */
  border: none;
  background: none;
  width:100%;
  cursor:pointer;
}

.ss-wrapper {
  position: relative;
  overflow: hidden;
}

.ss-label {
  display: block;
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ss-active {}

.ss-hover {}

.ss-focus {}

.ss-selected {}

```

## Init Options

* enabled_class          - `ss-enabled`
* wrapper_class          - `ss-wrapper`
* wrapper_active_class   - `ss-active`
* wrapper_focus_class    - `ss-focus`
* wrapper_hover_class    - `ss-hover`
* wrapper_selected_class - `ss-selected`
* label_class            - `ss-label`

## Methods

* init      - `$("select").selectasaur(OPTIONS)`
* destroy   - `$("select").selectasaur('destroy')`

## Callbacks

```js
$('select').selectasaur({
  change     : function () {},
  focus      : function () {},
  blur       : function () {},
  mousedown  : function () {},
  mouseup    : function () {},
  mouseenter : function () {},
  mouseleave : function () {},
  keyup      : function () {}
});
```
