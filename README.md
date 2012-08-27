# Scrollface

Selectasaur lets you have customized `select` targets. It will wrap select tags up in stylable boxes while retaining native popovers. Heavily inspired by [Uniform.js](https://github.com/pixelmatrix/uniform).

## Usage

### Javascript

```js
$('select').selectasaur();
```

### HTML

```html
<select>
  <option>Select a dinosaur...</option>
  <option>Breviceratops</option>
  <option>Charonosaurus</option>
  <option>Liaoceratops</option>
  <option>Mapusaurus</option>
</select>
```
### CSS

```css
.selectasaur-enabled {
  position: absolute;
  opacity: 0;
  height: 25px; /* adjust manually for best hit state */
  border: none;
  background: none;
  width:100%;
  cursor:pointer;
}

.selectasaur-wrapper {
  position: relative;
  overflow: hidden;
}

.selectasaur-label {
  display: block;
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.selectasaur-wrapper-active {}

.selectasaur-wrapper-hover {}

.selectasaur-wrapper-focus {}

```

## Init Options

* enabled_class        - `selectasaur-enabled`
* wrapper_class        - `selectasaur-wrapper`
* wrapper_active_class - `selectasaur-wrapper-active`
* wrapper_focus_class  - `selectasaur-wrapper-focus`
* wrapper_hover_class  - `selectasaur-wrapper-hover`
* label_class          - `selectasaur-label`

## Methods

* init      - `$("select").selectasaur(OPTIONS)`
* destroy   - `$("select").selectasaur('destroy')`