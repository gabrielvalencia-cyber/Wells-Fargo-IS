/* @ds-bundle: {"format":3,"namespace":"UnframeDesignSystem_548518","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"CheckItem","sourcePath":"components/display/CheckItem.jsx"},{"name":"Stat","sourcePath":"components/display/Stat.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"ColumnCard","sourcePath":"components/surfaces/ColumnCard.jsx"},{"name":"CTASection","sourcePath":"ui_kits/website/CTASection.jsx"},{"name":"FrameryPillars","sourcePath":"ui_kits/website/FrameryPillars.jsx"},{"name":"Hero","sourcePath":"ui_kits/website/Hero.jsx"},{"name":"IndustryGrid","sourcePath":"ui_kits/website/IndustryGrid.jsx"},{"name":"LogoWall","sourcePath":"ui_kits/website/LogoWall.jsx"},{"name":"SiteFooter","sourcePath":"ui_kits/website/SiteFooter.jsx"},{"name":"SiteNav","sourcePath":"ui_kits/website/SiteNav.jsx"},{"name":"Testimonials","sourcePath":"ui_kits/website/Testimonials.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"aad4a991ecb3","components/buttons/IconButton.jsx":"366a565bb12d","components/display/Avatar.jsx":"04950c95610d","components/display/Badge.jsx":"505f3e10d7ef","components/display/CheckItem.jsx":"39275678ba08","components/display/Stat.jsx":"c19f39dde07b","components/display/Tag.jsx":"8c7caec383cb","components/surfaces/Card.jsx":"ceca05d31f45","components/surfaces/ColumnCard.jsx":"de7e3f529189","ui_kits/website/CTASection.jsx":"07ca6ca2ea39","ui_kits/website/FrameryPillars.jsx":"b3f906c8738d","ui_kits/website/Hero.jsx":"2a106007d2a4","ui_kits/website/IndustryGrid.jsx":"bb0cc606d338","ui_kits/website/LogoWall.jsx":"f86428413d64","ui_kits/website/SiteFooter.jsx":"fb49c4729dbe","ui_kits/website/SiteNav.jsx":"c576535ab112","ui_kits/website/Testimonials.jsx":"93589dac7dd4","ui_kits/website/WebChrome.jsx":"e9153c683043","ui_kits/website/WebHero.jsx":"55bf0eb346bd","ui_kits/website/WebSections.jsx":"a27145163373"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.UnframeDesignSystem_548518 = window.UnframeDesignSystem_548518 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ufr-btn {
  font-family: var(--font-sans);
  font-weight: var(--fw-semibold);
  display: inline-flex; align-items: center; justify-content: center;
  gap: var(--space-2);
  border: 1px solid transparent;
  border-radius: var(--radius-pill);
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
  transition: transform var(--dur-fast) var(--ease-standard),
              background var(--dur-normal) var(--ease-standard),
              box-shadow var(--dur-normal) var(--ease-standard),
              opacity var(--dur-normal) var(--ease-standard);
}
.ufr-btn:focus-visible { outline: none; box-shadow: var(--focus-ring); }
.ufr-btn:active { transform: translateY(1px); }
.ufr-btn[disabled] { opacity: 0.45; cursor: not-allowed; pointer-events: none; }

/* sizes */
.ufr-btn--sm { font-size: var(--fs-sm); padding: 8px 16px; }
.ufr-btn--md { font-size: var(--fs-body); padding: 11px 22px; }
.ufr-btn--lg { font-size: var(--fs-lg); padding: 15px 30px; }

/* variants */
.ufr-btn--primary { background: var(--brand); color: var(--text-on-brand); }
.ufr-btn--primary:hover { background: var(--brand-strong); }

.ufr-btn--gradient { background: var(--gradient-brand); color: #fff; background-size: 160% 160%; box-shadow: var(--shadow-brand); }
.ufr-btn--gradient:hover { background-position: 100% 0; }

.ufr-btn--secondary { background: var(--surface-card); color: var(--text-strong); border-color: var(--border-default); }
.ufr-btn--secondary:hover { border-color: var(--ink-900); background: var(--surface-subtle); }

.ufr-btn--ghost { background: transparent; color: var(--brand); }
.ufr-btn--ghost:hover { background: var(--brand-soft); }

.ufr-btn--dark { background: var(--ink-900); color: #fff; }
.ufr-btn--dark:hover { background: var(--ink-800); }

.ufr-btn--block { width: 100%; }
`;
function ensureStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('ufr-btn-styles')) return;
  const el = document.createElement('style');
  el.id = 'ufr-btn-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Unframe primary action button.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  iconLeft = null,
  iconRight = null,
  as = 'button',
  className = '',
  ...rest
}) {
  ensureStyles();
  const Tag = as;
  const cls = ['ufr-btn', `ufr-btn--${variant}`, `ufr-btn--${size}`, block ? 'ufr-btn--block' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ufr-iconbtn {
  display: inline-flex; align-items: center; justify-content: center;
  border-radius: var(--radius-pill);
  border: 1px solid transparent;
  cursor: pointer;
  color: var(--text-strong);
  background: transparent;
  transition: background var(--dur-normal) var(--ease-standard),
              border-color var(--dur-normal) var(--ease-standard),
              transform var(--dur-fast) var(--ease-standard);
}
.ufr-iconbtn:focus-visible { outline: none; box-shadow: var(--focus-ring); }
.ufr-iconbtn:active { transform: translateY(1px); }
.ufr-iconbtn[disabled] { opacity: 0.4; pointer-events: none; }
.ufr-iconbtn--sm { width: 32px; height: 32px; }
.ufr-iconbtn--md { width: 40px; height: 40px; }
.ufr-iconbtn--lg { width: 48px; height: 48px; }
.ufr-iconbtn--solid { background: var(--ink-900); color: #fff; }
.ufr-iconbtn--solid:hover { background: var(--ink-800); }
.ufr-iconbtn--soft { background: var(--surface-subtle); }
.ufr-iconbtn--soft:hover { background: var(--surface-muted); }
.ufr-iconbtn--outline { border-color: var(--border-default); }
.ufr-iconbtn--outline:hover { border-color: var(--ink-900); background: var(--surface-subtle); }
.ufr-iconbtn--ghost:hover { background: var(--surface-subtle); }
`;
function ensureStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('ufr-iconbtn-styles')) return;
  const el = document.createElement('style');
  el.id = 'ufr-iconbtn-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Square icon-only button.
 */
function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  label,
  className = '',
  ...rest
}) {
  ensureStyles();
  const cls = ['ufr-iconbtn', `ufr-iconbtn--${variant}`, `ufr-iconbtn--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ufr-avatar {
  display: inline-flex; align-items: center; justify-content: center;
  font-family: var(--font-sans); font-weight: var(--fw-semibold);
  border-radius: var(--radius-pill);
  color: #fff; overflow: hidden; flex: none;
  background: var(--gradient-brand);
}
.ufr-avatar img { width: 100%; height: 100%; object-fit: cover; }
.ufr-avatar--neutral { background: var(--ink-200); color: var(--text-strong); }
.ufr-avatar--ink { background: var(--ink-900); }
.ufr-avatar--sm { width: 28px; height: 28px; font-size: 11px; }
.ufr-avatar--md { width: 40px; height: 40px; font-size: 15px; }
.ufr-avatar--lg { width: 56px; height: 56px; font-size: 20px; }
.ufr-avatar--square { border-radius: var(--radius-md); }
`;
function ensureStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('ufr-avatar-styles')) return;
  const el = document.createElement('style');
  el.id = 'ufr-avatar-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Avatar — gradient-filled with initials, or an image.
 */
function Avatar({
  initials,
  src,
  alt = '',
  size = 'md',
  tone = 'gradient',
  square = false,
  className = '',
  ...rest
}) {
  ensureStyles();
  const cls = ['ufr-avatar', `ufr-avatar--${size}`, tone !== 'gradient' ? `ufr-avatar--${tone}` : '', square ? 'ufr-avatar--square' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ufr-badge {
  display: inline-flex; align-items: center; gap: 6px;
  font-family: var(--font-sans);
  font-weight: var(--fw-semibold);
  font-size: var(--fs-xs);
  line-height: 1;
  padding: 5px 10px;
  border-radius: var(--radius-pill);
  border: 1px solid transparent;
  white-space: nowrap;
}
.ufr-badge--neutral  { background: var(--surface-muted); color: var(--text-body); }
.ufr-badge--brand    { background: var(--brand-soft); color: var(--brand-strong); }
.ufr-badge--positive { background: var(--positive-soft); color: #0c7a58; }
.ufr-badge--negative { background: var(--negative-soft); color: #c32b49; }
.ufr-badge--warning  { background: #FFF1E0; color: #b76200; }
.ufr-badge--dark     { background: var(--ink-900); color: #fff; }
.ufr-badge--gradient { background: var(--gradient-brand); color: #fff; }
.ufr-badge--dot::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
`;
function ensureStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('ufr-badge-styles')) return;
  const el = document.createElement('style');
  el.id = 'ufr-badge-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Small status badge.
 */
function Badge({
  children,
  tone = 'neutral',
  dot = false,
  className = '',
  ...rest
}) {
  ensureStyles();
  const cls = ['ufr-badge', `ufr-badge--${tone}`, dot ? 'ufr-badge--dot' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/CheckItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ufr-check { display: flex; align-items: flex-start; gap: 10px; font-family: var(--font-sans); font-size: var(--fs-body); color: var(--text-body); line-height: var(--lh-snug); }
.ufr-check__mark {
  flex: none; width: 20px; height: 20px; border-radius: 50%;
  display: inline-flex; align-items: center; justify-content: center;
  font-size: 12px; font-weight: 700; margin-top: 1px;
}
.ufr-check--yes .ufr-check__mark { background: var(--positive-soft); color: #0c7a58; }
.ufr-check--no  .ufr-check__mark { background: var(--negative-soft); color: #c32b49; }
.ufr-check--neutral .ufr-check__mark { background: var(--surface-muted); color: var(--text-muted); }
.ufr-check--yes.ufr-check--bare .ufr-check__mark { background: none; color: var(--positive); }
.ufr-check--no.ufr-check--bare .ufr-check__mark { background: none; color: var(--negative); }
`;
function ensureStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('ufr-check-styles')) return;
  const el = document.createElement('style');
  el.id = 'ufr-check-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
const GLYPH = {
  yes: '✓',
  no: '✕',
  neutral: '•'
};

/**
 * Checklist line item — the ✓ / ✕ rows used throughout Unframe decks.
 */
function CheckItem({
  children,
  status = 'yes',
  bare = false,
  className = '',
  ...rest
}) {
  ensureStyles();
  const cls = ['ufr-check', `ufr-check--${status}`, bare ? 'ufr-check--bare' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ufr-check__mark",
    "aria-hidden": "true"
  }, GLYPH[status]), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { CheckItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/CheckItem.jsx", error: String((e && e.message) || e) }); }

// components/display/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ufr-stat { font-family: var(--font-sans); display: flex; flex-direction: column; gap: 4px; }
.ufr-stat__value {
  font-weight: var(--fw-bold);
  letter-spacing: var(--ls-tight);
  line-height: 1;
  color: var(--text-strong);
}
.ufr-stat--gradient .ufr-stat__value {
  background: var(--gradient-brand);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.ufr-stat__value--sm { font-size: 2rem; }
.ufr-stat__value--md { font-size: 2.75rem; }
.ufr-stat__value--lg { font-size: 3.75rem; }
.ufr-stat__label {
  font-size: var(--fs-sm);
  color: var(--text-muted);
  font-weight: var(--fw-medium);
  max-width: 24ch;
}
.ufr-stat--center { align-items: center; text-align: center; }
.ufr-stat--center .ufr-stat__label { margin: 0 auto; }
`;
function ensureStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('ufr-stat-styles')) return;
  const el = document.createElement('style');
  el.id = 'ufr-stat-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Big metric / KPI block for customer success stories.
 */
function Stat({
  value,
  label,
  size = 'md',
  gradient = false,
  center = false,
  className = '',
  ...rest
}) {
  ensureStyles();
  const cls = ['ufr-stat', gradient ? 'ufr-stat--gradient' : '', center ? 'ufr-stat--center' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: `ufr-stat__value ufr-stat__value--${size}`
  }, value), label && /*#__PURE__*/React.createElement("div", {
    className: "ufr-stat__label"
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ufr-tag {
  display: inline-flex; align-items: center; gap: 6px;
  font-family: var(--font-sans);
  font-weight: var(--fw-medium);
  font-size: var(--fs-sm);
  line-height: 1;
  padding: 7px 14px;
  border-radius: var(--radius-pill);
  border: 1px solid var(--border-default);
  background: var(--surface-card);
  color: var(--text-body);
}
.ufr-tag--solid { background: var(--surface-subtle); border-color: transparent; }
.ufr-tag--brand { border-color: var(--brand); color: var(--brand-strong); background: var(--brand-soft); }
`;
function ensureStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('ufr-tag-styles')) return;
  const el = document.createElement('style');
  el.id = 'ufr-tag-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Outlined category tag / chip.
 */
function Tag({
  children,
  variant = 'outline',
  icon = null,
  className = '',
  ...rest
}) {
  ensureStyles();
  const cls = ['ufr-tag', variant !== 'outline' ? `ufr-tag--${variant}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ufr-card {
  font-family: var(--font-sans);
  background: var(--surface-card);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-subtle);
  padding: var(--space-6);
  box-sizing: border-box;
}
.ufr-card--elevated { border-color: transparent; box-shadow: var(--shadow-md); }
.ufr-card--flat { box-shadow: none; }
.ufr-card--subtle { background: var(--surface-subtle); border-color: transparent; }
.ufr-card--dark { background: var(--ink-950); border-color: var(--border-on-dark); color: var(--text-on-dark); }
.ufr-card--gradient {
  border: none; color: #fff;
  background: var(--gradient-brand);
}
/* gradient hairline border via padding trick */
.ufr-card--outline-gradient {
  border: none;
  background:
    linear-gradient(var(--surface-card), var(--surface-card)) padding-box,
    var(--gradient-brand) border-box;
  border: 1.5px solid transparent;
}
.ufr-card--interactive { transition: transform var(--dur-normal) var(--ease-standard), box-shadow var(--dur-normal) var(--ease-standard); cursor: pointer; }
.ufr-card--interactive:hover { transform: translateY(-3px); box-shadow: var(--shadow-lg); }
`;
function ensureStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('ufr-card-styles')) return;
  const el = document.createElement('style');
  el.id = 'ufr-card-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Surface container.
 */
function Card({
  children,
  variant = 'default',
  interactive = false,
  className = '',
  ...rest
}) {
  ensureStyles();
  const cls = ['ufr-card', variant !== 'default' ? `ufr-card--${variant}` : '', interactive ? 'ufr-card--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ColumnCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ufr-col { display: flex; flex-direction: column; gap: 14px; height: 100%; }
.ufr-col__eyebrow {
  font-size: var(--fs-eyebrow); font-weight: var(--fw-bold);
  letter-spacing: var(--ls-eyebrow); text-transform: uppercase;
  color: var(--text-muted);
}
.ufr-col--highlight .ufr-col__eyebrow { color: var(--brand); }
.ufr-col__title { font-size: var(--fs-h4); font-weight: var(--fw-semibold); color: var(--text-strong); margin: 0; line-height: var(--lh-snug); }
.ufr-col__items { display: flex; flex-direction: column; gap: 10px; }
/* card body text stays at the default body size/weight (not enlarged/bold) */
/* thin, visible border on the standard columns; gradient hero column unchanged */
.ufr-colcard:not(.ufr-card--outline-gradient) { border-width: 1px; border-color: var(--border-default); }
.ufr-colcard.ufr-card--outline-gradient { border-width: 3px; }
`;
function ensureStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('ufr-col-styles')) return;
  const el = document.createElement('style');
  el.id = 'ufr-col-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Comparison column — the BUY / BUILD / HIRE / UNFRAME cards.
 * Pass `highlight` to render the winning option with a gradient border.
 */
function ColumnCard({
  eyebrow,
  title,
  items = [],
  highlight = false,
  className = '',
  ...rest
}) {
  ensureStyles();
  const cls = ['ufr-col', highlight ? 'ufr-col--highlight' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    variant: highlight ? 'outline-gradient' : 'default',
    className: "ufr-colcard",
    style: {
      height: '100%'
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: cls
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "ufr-col__eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    className: "ufr-col__title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "ufr-col__items"
  }, items.map((it, i) => /*#__PURE__*/React.createElement(__ds_scope.CheckItem, {
    key: i,
    status: it.status || (highlight ? 'yes' : 'no')
  }, it.text)))));
}
Object.assign(__ds_scope, { ColumnCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ColumnCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CTASection.jsx
try { (() => {
const CSS = `
.ufrk-cta { background: var(--surface-page); padding: 0 40px 96px; font-family: var(--font-sans); }
.ufrk-cta__band {
  position: relative; overflow: hidden; max-width: 1120px; margin: 0 auto;
  border-radius: var(--radius-2xl); background: radial-gradient(120% 140% at 50% -10%, #15151E 0%, #08080B 70%);
  color: #fff; text-align: center; padding: 80px 40px;
}
.ufrk-cta__glow { position: absolute; left: 50%; bottom: -120px; transform: translateX(-50%); width: 460px; height: 240px; border-radius: 50%; background: linear-gradient(105deg, #00C5EA, #7800FF, #FF9600); opacity: .5; filter: blur(60px); }
.ufrk-cta__inner { position: relative; z-index: 2; }
.ufrk-cta h2 { font-size: 52px; font-weight: 800; letter-spacing: -.02em; line-height: 1.02; margin: 0 0 18px; max-width: 18ch; margin-inline: auto; }
.ufrk-cta p { font-size: 20px; color: rgba(255,255,255,0.7); margin: 0 0 36px; }
.ufrk-cta__row { display: flex; gap: 14px; justify-content: center; }
.ufrk-cta__btn { font-family: var(--font-sans); font-weight: 600; font-size: 16px; padding: 14px 30px; border-radius: var(--radius-pill); cursor: pointer; border: 1px solid transparent; transition: all var(--dur-normal) var(--ease-standard); }
.ufrk-cta__btn--solid { background: #fff; color: var(--ink-900); }
.ufrk-cta__btn--solid:hover { background: rgba(255,255,255,0.85); }
.ufrk-cta__btn--ghost { background: transparent; color: #fff; border-color: rgba(255,255,255,0.35); }
.ufrk-cta__btn--ghost:hover { background: rgba(255,255,255,0.1); }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('ufrk-cta-styles')) return;
  const el = document.createElement('style');
  el.id = 'ufrk-cta-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Closing call-to-action band — dark rounded panel with brand glow.
 */
function CTASection({
  title = 'Adopt AI, or fall behind.',
  subtitle = 'Start with a quick win. Scale on a shared system. Pay only when you\u2019re happy.',
  primaryLabel = "Let's connect",
  secondaryLabel = 'See customer stories',
  onPrimary,
  onSecondary
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("section", {
    className: "ufrk-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ufrk-cta__band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ufrk-cta__glow"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ufrk-cta__inner"
  }, /*#__PURE__*/React.createElement("h2", null, title), /*#__PURE__*/React.createElement("p", null, subtitle), /*#__PURE__*/React.createElement("div", {
    className: "ufrk-cta__row"
  }, /*#__PURE__*/React.createElement("button", {
    className: "ufrk-cta__btn ufrk-cta__btn--solid",
    onClick: onPrimary
  }, primaryLabel), /*#__PURE__*/React.createElement("button", {
    className: "ufrk-cta__btn ufrk-cta__btn--ghost",
    onClick: onSecondary
  }, secondaryLabel)))));
}
Object.assign(__ds_scope, { CTASection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CTASection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FrameryPillars.jsx
try { (() => {
const CSS = `
.ufrk-framery { background: var(--surface-page); padding: 96px 40px; font-family: var(--font-sans); }
.ufrk-framery__head { max-width: 1120px; margin: 0 auto 48px; text-align: center; }
.ufrk-framery__eyebrow { font-size: 13px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--brand); margin-bottom: 14px; }
.ufrk-framery__head h2 { font-size: 46px; font-weight: 700; letter-spacing: -.02em; margin: 0 0 14px; color: var(--text-strong); }
.ufrk-framery__head p { font-size: 20px; color: var(--text-body); margin: 0 auto; max-width: 60ch; }
.ufrk-framery__grid { max-width: 1120px; margin: 0 auto; display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
.ufrk-pillar { display: flex; flex-direction: column; gap: 14px; height: 100%; }
.ufrk-pillar__icon { width: 44px; height: 44px; border-radius: var(--radius-md); display: inline-flex; align-items: center; justify-content: center; color: #fff; font-weight: 700; font-size: 18px; }
.ufrk-pillar h3 { font-size: 22px; font-weight: 600; margin: 0; color: var(--text-strong); }
.ufrk-pillar p { font-size: 16px; color: var(--text-body); margin: 0; line-height: 1.55; }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('ufrk-framery-styles')) return;
  const el = document.createElement('style');
  el.id = 'ufrk-framery-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
const DEFAULT = [{
  k: 'AO',
  color: '#00C5EA',
  title: 'Agent Orchestrator',
  body: 'Coordinates AI agents across multi-step work — agents that do, not just answer, with full governance.'
}, {
  k: 'KF',
  color: '#7800FF',
  title: 'Knowledge Fabric',
  body: 'A continuously-learning, AI-native representation of your business that makes every solution smarter.'
}, {
  k: 'DC',
  color: '#DF00B4',
  title: 'Data Connectivity',
  body: 'Integrate with anything, fast — any SaaS, API, database or file. No data leaves your perimeter.'
}, {
  k: 'BB',
  color: '#FF9600',
  title: 'Building Blocks',
  body: 'Deep technical components — the Lego bricks our blueprint assembles into your tailored solution.'
}];

/**
 * "The Framery" platform pillar section — 2×2 grid of the four platform
 * pillars (Agent Orchestrator, Knowledge Fabric, Data Connectivity,
 * Building Blocks). Composes the Card primitive.
 */
function FrameryPillars({
  eyebrow = 'The Framery',
  title = 'One open platform for enterprise AI',
  intro = 'All your solutions run on a shared layer — continuously learning from your data, solutions, and the interactions within them.',
  pillars = DEFAULT
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("section", {
    className: "ufrk-framery"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ufrk-framery__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ufrk-framery__eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h2", null, title), /*#__PURE__*/React.createElement("p", null, intro)), /*#__PURE__*/React.createElement("div", {
    className: "ufrk-framery__grid"
  }, pillars.map(p => /*#__PURE__*/React.createElement(__ds_scope.Card, {
    variant: "elevated",
    interactive: true,
    key: p.title
  }, /*#__PURE__*/React.createElement("div", {
    className: "ufrk-pillar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ufrk-pillar__icon",
    style: {
      background: p.color
    }
  }, p.k), /*#__PURE__*/React.createElement("h3", null, p.title), /*#__PURE__*/React.createElement("p", null, p.body))))));
}
Object.assign(__ds_scope, { FrameryPillars });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FrameryPillars.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
const CSS = `
.ufrk-hero {
  position: relative; overflow: hidden;
  background: radial-gradient(120% 90% at 50% 8%, #14141C 0%, #08080B 55%, #050507 100%);
  color: #fff; font-family: var(--font-sans);
  padding: 96px 40px 0; text-align: center;
}
/* faint mountain-range suggestion (stand-in for the real hero photo) */
.ufrk-hero__ridge {
  position: absolute; left: 0; right: 0; bottom: 0; height: 260px;
  background:
    linear-gradient(to top, rgba(120,130,150,0.18), transparent),
    conic-gradient(from 210deg at 30% 130%, transparent 0deg, rgba(160,170,190,0.12) 30deg, transparent 60deg),
    conic-gradient(from 150deg at 72% 130%, transparent 0deg, rgba(160,170,190,0.10) 30deg, transparent 60deg);
  -webkit-mask-image: linear-gradient(to top, #000 30%, transparent);
  mask-image: linear-gradient(to top, #000 30%, transparent);
}
.ufrk-hero__inner { position: relative; z-index: 3; max-width: 1000px; margin: 0 auto; }
.ufrk-hero h1 {
  font-size: 88px; font-weight: 800; letter-spacing: -0.03em; line-height: 0.98;
  margin: 0 auto 28px; max-width: 14ch;
}
.ufrk-hero__sub { font-size: 28px; font-weight: 500; color: #fff; margin: 0 auto 18px; max-width: 30ch; }
.ufrk-hero__micro { font-size: 18px; font-weight: 500; color: rgba(255,255,255,0.62); margin: 0 auto 44px; }
.ufrk-hero__cta { display: flex; gap: 14px; justify-content: center; margin-bottom: 88px; }
.ufrk-hero__btn {
  font-family: var(--font-sans); font-weight: 600; font-size: 16px;
  padding: 14px 30px; border-radius: var(--radius-pill); cursor: pointer;
  border: 1px solid transparent; transition: all var(--dur-normal) var(--ease-standard);
}
.ufrk-hero__btn--solid { background: #fff; color: var(--ink-900); }
.ufrk-hero__btn--solid:hover { background: rgba(255,255,255,0.85); }
.ufrk-hero__btn--ghost { background: transparent; color: #fff; border-color: rgba(255,255,255,0.35); }
.ufrk-hero__btn--ghost:hover { background: rgba(255,255,255,0.10); border-color: rgba(255,255,255,0.6); }
/* the glowing gradient monolith */
.ufrk-hero__monolith {
  position: relative; z-index: 2; width: 300px; height: 188px; margin: 0 auto;
  border-radius: 10px; background: linear-gradient(105deg, #00C5EA 0%, #3231DD 24%, #7800FF 46%, #DF00B4 66%, #FF0080 82%, #FF9600 100%);
  box-shadow:
    0 0 80px 10px rgba(120,0,255,0.55),
    0 0 160px 40px rgba(0,197,234,0.30),
    0 0 200px 60px rgba(255,0,128,0.25);
}
@media (prefers-reduced-motion: no-preference) {
  .ufrk-hero__monolith { animation: ufrk-pulse 6s var(--ease-standard) infinite; }
  @keyframes ufrk-pulse { 0%,100% { filter: brightness(1); } 50% { filter: brightness(1.12); } }
}
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('ufrk-hero-styles')) return;
  const el = document.createElement('style');
  el.id = 'ufrk-hero-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Dark homepage hero — big headline, subhead, micro-line, two pill CTAs,
 * and the glowing brand-gradient "monolith". The real site layers this
 * over a snow-mountain photo (bg-hero-home); we approximate with a dark
 * radial backdrop + faint ridge. Drop a real photo into `.ufrk-hero` bg.
 */
function Hero({
  title = 'Turn your most critical operations AI-native',
  subtitle = 'Managed AI transformation tailored to how your enterprise operates',
  micro = 'No upfront cost. No FDE required. Full agent governance.',
  primaryLabel = "Let's connect",
  secondaryLabel = 'See our customers',
  onPrimary,
  onSecondary
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("header", {
    className: "ufrk-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ufrk-hero__inner"
  }, /*#__PURE__*/React.createElement("h1", null, title), /*#__PURE__*/React.createElement("p", {
    className: "ufrk-hero__sub"
  }, subtitle), /*#__PURE__*/React.createElement("p", {
    className: "ufrk-hero__micro"
  }, micro), /*#__PURE__*/React.createElement("div", {
    className: "ufrk-hero__cta"
  }, /*#__PURE__*/React.createElement("button", {
    className: "ufrk-hero__btn ufrk-hero__btn--solid",
    onClick: onPrimary
  }, primaryLabel), /*#__PURE__*/React.createElement("button", {
    className: "ufrk-hero__btn ufrk-hero__btn--ghost",
    onClick: onSecondary
  }, secondaryLabel))), /*#__PURE__*/React.createElement("div", {
    className: "ufrk-hero__ridge"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ufrk-hero__monolith"
  }));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/IndustryGrid.jsx
try { (() => {
const CSS = `
.ufrk-ind { background: var(--surface-subtle); padding: 96px 40px; font-family: var(--font-sans); }
.ufrk-ind__head { max-width: 1120px; margin: 0 auto 44px; }
.ufrk-ind__eyebrow { font-size: 13px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--brand); margin-bottom: 14px; }
.ufrk-ind__head h2 { font-size: 46px; font-weight: 700; letter-spacing: -.02em; margin: 0; color: var(--text-strong); max-width: 18ch; }
.ufrk-ind__grid { max-width: 1120px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.ufrk-ind__card {
  position: relative; overflow: hidden; background: var(--ink-950); color: #fff;
  border-radius: var(--radius-lg); padding: 26px; min-height: 188px;
  display: flex; flex-direction: column; justify-content: space-between;
  transition: transform var(--dur-normal) var(--ease-standard);
}
.ufrk-ind__card:hover { transform: translateY(-4px); }
.ufrk-ind__glow { position: absolute; width: 220px; height: 220px; right: -80px; top: -80px; border-radius: 50%; opacity: .5; filter: blur(30px); }
.ufrk-ind__card h3 { position: relative; font-size: 22px; font-weight: 600; margin: 0; }
.ufrk-ind__card span { position: relative; font-size: 15px; color: rgba(255,255,255,0.7); }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('ufrk-ind-styles')) return;
  const el = document.createElement('style');
  el.id = 'ufrk-ind-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
const DEFAULT = [{
  name: 'Financial Services',
  tag: '41.7x ROI',
  color: '#3231DD'
}, {
  name: 'Insurance',
  tag: 'Claims automation',
  color: '#7800FF'
}, {
  name: 'Healthcare',
  tag: 'Faster intake',
  color: '#00C5EA'
}, {
  name: 'Manufacturing',
  tag: 'Supply intelligence',
  color: '#FF9600'
}, {
  name: 'Real Estate',
  tag: '96%+ accuracy',
  color: '#DF00B4'
}, {
  name: 'Retail',
  tag: 'Inventory briefs',
  color: '#FF0080'
}];

/**
 * Industries section — dark cards with a colored glow per vertical,
 * matching the site's industry coverage.
 */
function IndustryGrid({
  eyebrow = 'Industries',
  title = 'Built for the work that runs your industry',
  industries = DEFAULT
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("section", {
    className: "ufrk-ind"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ufrk-ind__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ufrk-ind__eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h2", null, title)), /*#__PURE__*/React.createElement("div", {
    className: "ufrk-ind__grid"
  }, industries.map(i => /*#__PURE__*/React.createElement("div", {
    className: "ufrk-ind__card",
    key: i.name
  }, /*#__PURE__*/React.createElement("div", {
    className: "ufrk-ind__glow",
    style: {
      background: i.color
    }
  }), /*#__PURE__*/React.createElement("h3", null, i.name), /*#__PURE__*/React.createElement("span", null, i.tag)))));
}
Object.assign(__ds_scope, { IndustryGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/IndustryGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LogoWall.jsx
try { (() => {
const CSS = `
.ufrk-logowall {
  background: #050507; padding: 28px 40px 40px; font-family: var(--font-sans);
  display: flex; align-items: center; justify-content: space-between; gap: 28px; flex-wrap: wrap;
}
.ufrk-logowall__item {
  color: rgba(255,255,255,0.55); font-weight: 700; font-size: 19px; letter-spacing: 0.02em;
  white-space: nowrap; filter: grayscale(1); transition: color var(--dur-normal) var(--ease-standard);
}
.ufrk-logowall__item:hover { color: rgba(255,255,255,0.85); }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('ufrk-logowall-styles')) return;
  const el = document.createElement('style');
  el.id = 'ufrk-logowall-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
const DEFAULT = ['NZZ', 'CUSHMAN & WAKEFIELD', 'CLIMB', 'AST', 'ARMIS', 'FREED PEOPLE', 'AVISON YOUNG', 'acora', 'MasterTel USA'];

/**
 * Greyscale customer logo wall under the hero.
 * NOTE: customer marks aren't Unframe assets, so names render as styled
 * greyscale wordmarks — swap in real <img> logos for production.
 */
function LogoWall({
  logos = DEFAULT
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: "ufrk-logowall"
  }, logos.map(l => /*#__PURE__*/React.createElement("span", {
    className: "ufrk-logowall__item",
    key: l
  }, l)));
}
Object.assign(__ds_scope, { LogoWall });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LogoWall.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteFooter.jsx
try { (() => {
const CSS = `
.ufrk-foot { background: #050507; color: rgba(255,255,255,0.7); font-family: var(--font-sans); padding: 64px 40px 36px; }
.ufrk-foot__top { max-width: 1120px; margin: 0 auto; display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr; gap: 40px; padding-bottom: 48px; border-bottom: 1px solid rgba(255,255,255,0.1); }
.ufrk-foot__brand img { height: 26px; margin-bottom: 18px; }
.ufrk-foot__brand p { font-size: 15px; line-height: 1.6; margin: 0; max-width: 32ch; }
.ufrk-foot__col h4 { font-size: 13px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: rgba(255,255,255,0.5); margin: 0 0 16px; }
.ufrk-foot__col a { display: block; font-size: 15px; color: rgba(255,255,255,0.75); text-decoration: none; margin-bottom: 11px; }
.ufrk-foot__col a:hover { color: #fff; }
.ufrk-foot__bottom { max-width: 1120px; margin: 0 auto; padding-top: 24px; display: flex; justify-content: space-between; align-items: center; font-size: 14px; color: rgba(255,255,255,0.5); }
.ufrk-foot__bottom a { color: rgba(255,255,255,0.5); text-decoration: none; }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('ufrk-foot-styles')) return;
  const el = document.createElement('style');
  el.id = 'ufrk-foot-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
const COLS = [{
  h: 'Platform',
  links: ['The Framery', 'Agent Orchestrator', 'Knowledge Fabric', 'Building Blocks']
}, {
  h: 'Industries',
  links: ['Financial Services', 'Healthcare', 'Manufacturing', 'Retail']
}, {
  h: 'Company',
  links: ['About', 'Careers', 'Security', 'Contact']
}];

/**
 * Site footer — brand blurb, link columns, and legal row on near-black.
 */
function SiteFooter({
  logoSrc = '../../assets/logos/unframe-light.png'
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("footer", {
    className: "ufrk-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ufrk-foot__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ufrk-foot__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Unframe"
  }), /*#__PURE__*/React.createElement("p", null, "Managed AI delivery for the enterprise. Tailored solutions, fully managed \u2014 you pay only when you're happy.")), COLS.map(c => /*#__PURE__*/React.createElement("div", {
    className: "ufrk-foot__col",
    key: c.h
  }, /*#__PURE__*/React.createElement("h4", null, c.h), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    href: "#",
    key: l
  }, l))))), /*#__PURE__*/React.createElement("div", {
    className: "ufrk-foot__bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Unframe. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Terms"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@unframe.ai"
  }, "info@unframe.ai"))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteNav.jsx
try { (() => {
const CSS = `
.ufrk-nav { font-family: var(--font-sans); position: relative; z-index: 40; }
.ufrk-anno {
  background: #0B0B0F; color: #fff; text-align: center;
  font-size: 14px; padding: 11px 16px; display: flex; gap: 14px; justify-content: center; align-items: center;
}
.ufrk-anno a { color: #fff; font-weight: 600; text-decoration: none; display: inline-flex; gap: 6px; align-items: center; }
.ufrk-anno a:hover { opacity: .8; }
.ufrk-bar {
  background: #EAEAEC; height: 72px; display: flex; align-items: center;
  padding: 0 40px; gap: 32px;
}
.ufrk-bar__logo { height: 26px; }
.ufrk-bar__menu { display: flex; gap: 4px; margin: 0 auto; }
.ufrk-bar__item {
  display: inline-flex; align-items: center; gap: 6px; padding: 8px 14px;
  font-size: 15px; font-weight: 500; color: var(--ink-900); cursor: pointer;
  border-radius: var(--radius-pill); background: transparent; border: none;
  transition: background var(--dur-fast) var(--ease-standard);
}
.ufrk-bar__item:hover { background: rgba(0,0,0,0.06); }
.ufrk-bar__item svg { width: 14px; height: 14px; opacity: .55; }
.ufrk-pop {
  position: absolute; top: 100%; margin-top: 8px; left: 50%; transform: translateX(-50%);
  background: #fff; border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);
  border: 1px solid var(--border-subtle); padding: 10px; min-width: 240px;
  display: none; flex-direction: column; gap: 2px;
}
.ufrk-bar__group { position: relative; }
.ufrk-bar__group:hover .ufrk-pop { display: flex; }
.ufrk-pop a { padding: 10px 12px; border-radius: var(--radius-sm); color: var(--text-body); text-decoration: none; font-size: 14px; }
.ufrk-pop a:hover { background: var(--surface-subtle); color: var(--text-strong); }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('ufrk-nav-styles')) return;
  const el = document.createElement('style');
  el.id = 'ufrk-nav-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
const Chevron = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("polyline", {
  points: "6 9 12 15 18 9"
}));
const MENUS = {
  Platform: ['The Framery', 'Agent Orchestrator', 'Knowledge Fabric', 'Data Connectivity', 'Building Blocks'],
  Industries: ['Financial Services', 'Insurance', 'Healthcare', 'Manufacturing', 'Real Estate', 'Retail'],
  Resources: ['Customer Stories', 'Blog', 'Documentation', 'Webinars'],
  Company: ['About', 'Careers', 'News', 'Contact']
};

/**
 * Unframe.ai marketing site top navigation — announcement bar, light-grey
 * bar with the logo, mega-menu dropdowns, and the "Let's connect" CTA.
 */
function SiteNav({
  announcement = 'Swish AI is now part of Unframe. Learn more about the acquisition.',
  logoSrc = '../../assets/logos/unframe-dark.png',
  onConnect
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("nav", {
    className: "ufrk-nav"
  }, announcement && /*#__PURE__*/React.createElement("div", {
    className: "ufrk-anno"
  }, /*#__PURE__*/React.createElement("span", null, announcement), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Learn more \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "ufrk-bar"
  }, /*#__PURE__*/React.createElement("img", {
    className: "ufrk-bar__logo",
    src: logoSrc,
    alt: "Unframe"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ufrk-bar__menu"
  }, Object.keys(MENUS).map(label => /*#__PURE__*/React.createElement("div", {
    className: "ufrk-bar__group",
    key: label
  }, /*#__PURE__*/React.createElement("button", {
    className: "ufrk-bar__item"
  }, label, /*#__PURE__*/React.createElement(Chevron, null)), /*#__PURE__*/React.createElement("div", {
    className: "ufrk-pop"
  }, MENUS[label].map(it => /*#__PURE__*/React.createElement("a", {
    href: "#",
    key: it
  }, it))))), /*#__PURE__*/React.createElement("button", {
    className: "ufrk-bar__item"
  }, "Security")), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "dark",
    size: "sm",
    onClick: onConnect
  }, "Let's connect")));
}
Object.assign(__ds_scope, { SiteNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Testimonials.jsx
try { (() => {
const CSS = `
.ufrk-test { background: var(--surface-page); padding: 96px 40px; font-family: var(--font-sans); }
.ufrk-test__head { max-width: 1120px; margin: 0 auto 44px; text-align: center; }
.ufrk-test__eyebrow { font-size: 13px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--brand); margin-bottom: 14px; }
.ufrk-test__head h2 { font-size: 40px; font-weight: 700; letter-spacing: -.02em; margin: 0; color: var(--text-strong); }
.ufrk-test__grid { max-width: 1120px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.ufrk-quote { display: flex; flex-direction: column; gap: 20px; height: 100%; }
.ufrk-quote__text { font-size: 17px; line-height: 1.55; color: var(--text-strong); margin: 0; flex: 1; }
.ufrk-quote__who { display: flex; align-items: center; gap: 12px; }
.ufrk-quote__name { font-size: 15px; font-weight: 600; color: var(--text-strong); }
.ufrk-quote__role { font-size: 13px; color: var(--text-muted); }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('ufrk-test-styles')) return;
  const el = document.createElement('style');
  el.id = 'ufrk-test-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
const DEFAULT = [{
  quote: 'Integrating Unframe into Climb\u2019s AI portfolio provides our clients with unparalleled insights, driving transformative growth and innovation.',
  name: 'Dale Foster',
  role: 'CEO, Climb',
  initials: 'DF'
}, {
  quote: 'Unframe\u2019s creative use of AI and their platform-driven approach creates value across the enterprise. Their expertise helps explore new opportunities in the AI journey.',
  name: 'Sal Companieh',
  role: 'Chief Digital & Information Officer',
  initials: 'SC'
}, {
  quote: 'Our ability to draw meaningful insights and deliver client outcomes has been significantly enhanced \u2014 we are aggressively pushing forward with Unframe.',
  name: 'Sameer Jain',
  role: 'Wholesale CIO',
  initials: 'SJ'
}];

/**
 * Testimonial section — three named customer quotes in Cards with a
 * gradient Avatar. Quotes sourced from the Unframe template deck.
 */
function Testimonials({
  eyebrow = 'Trusted by leading enterprises',
  title = 'Outcomes our customers stand behind',
  items = DEFAULT
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("section", {
    className: "ufrk-test"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ufrk-test__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ufrk-test__eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h2", null, title)), /*#__PURE__*/React.createElement("div", {
    className: "ufrk-test__grid"
  }, items.map(t => /*#__PURE__*/React.createElement(__ds_scope.Card, {
    variant: "default",
    key: t.name
  }, /*#__PURE__*/React.createElement("div", {
    className: "ufrk-quote"
  }, /*#__PURE__*/React.createElement("p", {
    className: "ufrk-quote__text"
  }, "\u201C", t.quote, "\u201D"), /*#__PURE__*/React.createElement("div", {
    className: "ufrk-quote__who"
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    initials: t.initials
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ufrk-quote__name"
  }, t.name), /*#__PURE__*/React.createElement("div", {
    className: "ufrk-quote__role"
  }, t.role))))))));
}
Object.assign(__ds_scope, { Testimonials });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Testimonials.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WebChrome.jsx
try { (() => {
/* Unframe Website UI kit — site chrome: announcement bar, nav, footer.
   Exports to window for the other kit scripts. */
const {
  useState
} = React;
function AnnouncementBar() {
  return /*#__PURE__*/React.createElement("div", {
    className: "wb-announce"
  }, /*#__PURE__*/React.createElement("span", null, "Swish AI is now part of Unframe. Learn more about the acquisition."), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "wb-announce__link"
  }, "Learn more ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192")));
}
const NAV = [{
  label: 'Platform',
  menu: {
    'Business Outcomes': ['Observability & Reporting', 'Knowledge On-Demand', 'Extraction & Abstraction', 'Workflow Automation'],
    'Platform': ['Overview', 'Data Connectivity', 'Knowledge Fabric', 'Agent Orchestrator']
  }
}, {
  label: 'Industries',
  menu: {
    'Top Industries': ['Financial Services', 'Insurance', 'Healthcare', 'Manufacturing', 'Real Estate', 'Retail']
  }
}, {
  label: 'Resources',
  menu: {
    'Discover': ['Resource Center', 'Webinars', 'Customer Stories', 'Blog', 'Workshops'],
    'Support': ['Customer Support', 'Partners', 'Integrations']
  }
}, {
  label: 'Company',
  menu: {
    'Company': ['About Us', 'Newsroom', 'Careers']
  }
}, {
  label: 'Security'
}];
function SiteNav() {
  const {
    Button
  } = window.UnframeDesignSystem_548518;
  const [open, setOpen] = useState(null);
  return /*#__PURE__*/React.createElement("header", {
    className: "wb-nav",
    onMouseLeave: () => setOpen(null)
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-nav__inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "wb-nav__logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/unframe-dark.png",
    alt: "Unframe"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "wb-nav__menu"
  }, NAV.map(item => /*#__PURE__*/React.createElement("div", {
    key: item.label,
    className: "wb-nav__item",
    onMouseEnter: () => setOpen(item.menu ? item.label : null)
  }, /*#__PURE__*/React.createElement("button", {
    className: 'wb-nav__link' + (open === item.label ? ' is-open' : '')
  }, item.label, item.menu && /*#__PURE__*/React.createElement("span", {
    className: "wb-nav__chev",
    "aria-hidden": "true"
  }, "\u2304"))))), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "sm"
  }, "Let's connect")), NAV.map(item => item.menu && open === item.label && /*#__PURE__*/React.createElement("div", {
    key: item.label,
    className: "wb-mega",
    onMouseEnter: () => setOpen(item.label)
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-mega__inner"
  }, Object.entries(item.menu).map(([group, links]) => /*#__PURE__*/React.createElement("div", {
    key: group,
    className: "wb-mega__col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-mega__head"
  }, group), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    className: "wb-mega__link"
  }, l))))))));
}
const FOOT = {
  PRODUCT: ['Platform', 'Security'],
  ALTERNATIVES: ['Build vs. Unframe', 'Build vs. Buy'],
  COMPANY: ['About', 'Locations', 'Careers'],
  RESOURCES: ['Blog', 'Resources', 'Customers', 'Workshop'],
  SUPPORT: ['Customer Support', 'Partners'],
  LEGAL: ['Legal', 'Cookie Settings']
};
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "wb-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-footer__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-footer__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/unframe-light.png",
    alt: "Unframe"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wb-footer__social"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "LinkedIn"
  }, "in"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "YouTube"
  }, "\u25B6"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "X"
  }, "\u2715"))), /*#__PURE__*/React.createElement("div", {
    className: "wb-footer__cols"
  }, Object.entries(FOOT).map(([head, links]) => /*#__PURE__*/React.createElement("div", {
    key: head,
    className: "wb-footer__col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-footer__head"
  }, head), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    className: "wb-footer__link"
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    className: "wb-footer__bottom"
  }, "\xA9 2026 Unframe. All rights reserved."));
}
Object.assign(window, {
  AnnouncementBar,
  SiteNav,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WebChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WebHero.jsx
try { (() => {
/* Unframe Website UI kit — dark cinematic hero + customer logo wall. */

function Hero() {
  const {
    Button
  } = window.UnframeDesignSystem_548518;
  return /*#__PURE__*/React.createElement("section", {
    className: "wb-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-hero__glowwrap",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-hero__ridge"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wb-hero__glow"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wb-hero__prism"
  })), /*#__PURE__*/React.createElement("div", {
    className: "wb-hero__content"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "wb-hero__title"
  }, "Turn your most critical operations AI-native"), /*#__PURE__*/React.createElement("p", {
    className: "wb-hero__sub"
  }, "Managed AI transformation tailored to how your enterprise operates"), /*#__PURE__*/React.createElement("p", {
    className: "wb-hero__micro"
  }, "No upfront cost. No FDE required. Full agent governance."), /*#__PURE__*/React.createElement("div", {
    className: "wb-hero__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    className: "wb-btn-white"
  }, "Let's connect"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    className: "wb-btn-ghostdark"
  }, "See our customers"))), /*#__PURE__*/React.createElement(LogoWall, null));
}
const LOGOS = [{
  name: 'NZZ',
  style: {
    fontFamily: 'Georgia, serif',
    fontWeight: 400,
    letterSpacing: '.02em'
  }
}, {
  name: 'CUSHMAN &\nWAKEFIELD',
  style: {
    fontSize: '12px',
    lineHeight: 1.1,
    fontWeight: 700
  }
}, {
  name: 'CLIMB',
  style: {
    fontWeight: 800,
    letterSpacing: '.04em'
  }
}, {
  name: 'AST',
  style: {
    fontWeight: 800,
    letterSpacing: '.06em'
  }
}, {
  name: 'ARMIS',
  style: {
    fontWeight: 700,
    letterSpacing: '.12em'
  }
}, {
  name: 'FREED PEOPLE',
  style: {
    fontWeight: 600,
    letterSpacing: '.04em',
    fontSize: '15px'
  }
}, {
  name: 'AVISON\nYOUNG',
  style: {
    fontSize: '13px',
    lineHeight: 1.05,
    fontWeight: 700
  }
}, {
  name: 'acora',
  style: {
    fontWeight: 700,
    textTransform: 'lowercase',
    fontSize: '22px'
  }
}, {
  name: 'MasterTel USA',
  style: {
    fontWeight: 700,
    fontSize: '15px'
  }
}];
function LogoWall() {
  return /*#__PURE__*/React.createElement("div", {
    className: "wb-logowall"
  }, LOGOS.map(l => /*#__PURE__*/React.createElement("span", {
    key: l.name,
    className: "wb-logowall__item",
    style: l.style
  }, l.name.split('\n').map((ln, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'block'
    }
  }, ln)))));
}
Object.assign(window, {
  Hero,
  LogoWall
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WebHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WebSections.jsx
try { (() => {
/* Unframe Website UI kit — body sections. */
const {
  useState: useStateS
} = React;

/* --- Proven outcomes across industries --- */
const INDUSTRIES = ['Financial Services', 'Healthcare', 'Retail', 'Manufacturing', 'Real Estate'];
const OUTCOMES = [{
  value: '40%',
  unit: 'lower',
  desc: 'record storage and retrieval cost',
  who: 'Global bank'
}, {
  value: '$1B+',
  unit: 'growth',
  desc: 'capacity unlocked without adding headcount',
  who: 'Leading CRE firm'
}, {
  value: '30%',
  unit: 'reduction',
  desc: 'in supply-driven stock outs',
  who: 'F500 Manufacturer'
}];
function Outcomes() {
  const {
    Tag,
    Card
  } = window.UnframeDesignSystem_548518;
  const [active, setActive] = useStateS(0);
  return /*#__PURE__*/React.createElement("section", {
    className: "wb-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-wrap"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "wb-h2"
  }, "Proven outcomes across industries"), /*#__PURE__*/React.createElement("p", {
    className: "wb-lede"
  }, "Every industry operates differently. Unframe delivers AI for the workflows and systems that matter most to you."), /*#__PURE__*/React.createElement("div", {
    className: "wb-tabs"
  }, INDUSTRIES.map((ind, i) => /*#__PURE__*/React.createElement("button", {
    key: ind,
    onClick: () => setActive(i),
    className: 'wb-tab' + (i === active ? ' is-active' : '')
  }, ind))), /*#__PURE__*/React.createElement("div", {
    className: "wb-grid3",
    style: {
      marginTop: '32px'
    }
  }, OUTCOMES.map(o => /*#__PURE__*/React.createElement(Card, {
    key: o.who,
    variant: "elevated",
    className: "wb-outcome"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-outcome__value"
  }, o.value, " ", /*#__PURE__*/React.createElement("span", null, o.unit)), /*#__PURE__*/React.createElement("div", {
    className: "wb-outcome__desc"
  }, o.desc), /*#__PURE__*/React.createElement("div", {
    className: "wb-outcome__who"
  }, o.who))))));
}

/* --- Where AI makes the biggest impact --- */
const IMPACT = [['Unstructured Data', 'where context and accuracy are critical.'], ['Cross-system workflows', 'spanning multiple systems, CRMs, data lakes, and proprietary tools.'], ['Fragmented data', 'structured and unstructured, across diverse internal and external sources.'], ['Operational experiences', 'that eliminate complexity and meet teams where they work.']];
function Impact() {
  return /*#__PURE__*/React.createElement("section", {
    className: "wb-section wb-section--subtle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-wrap"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "wb-h2"
  }, "Where AI makes the biggest impact"), /*#__PURE__*/React.createElement("div", {
    className: "wb-grid4",
    style: {
      marginTop: '36px'
    }
  }, IMPACT.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "wb-impact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-impact__dot",
    style: {
      background: ['var(--u-cyan)', 'var(--u-purple)', 'var(--u-magenta)', 'var(--u-orange)'][i]
    }
  }), /*#__PURE__*/React.createElement("h3", {
    className: "wb-impact__title"
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "wb-impact__desc"
  }, d))))));
}

/* --- The Framery (dark) --- */
const PILLARS = [['Agent Orchestrator', 'Coordinated execution with built-in guardrails and observability'], ['Knowledge Fabric', 'Fragmented enterprise data transformed into AI-ready context'], ['Data Connectivity', 'Unified interoperability across every enterprise system and data environment'], ['Building Blocks', 'Feature-rich modular building blocks at the core of mission-critical AI']];
function Framery() {
  const {
    Button,
    Badge
  } = window.UnframeDesignSystem_548518;
  return /*#__PURE__*/React.createElement("section", {
    className: "wb-framery"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-wrap"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "gradient"
  }, "The Framery"), /*#__PURE__*/React.createElement("h2", {
    className: "wb-h2 wb-h2--invert",
    style: {
      marginTop: '16px'
    }
  }, "The open platform powering every AI win"), /*#__PURE__*/React.createElement("p", {
    className: "wb-lede wb-lede--invert"
  }, "Every solution runs on the Framery \u2014 Unframe's OS purpose-built to deliver production-grade AI securely, at scale, alongside your existing AI program."), /*#__PURE__*/React.createElement("div", {
    className: "wb-grid4",
    style: {
      marginTop: '40px'
    }
  }, PILLARS.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "wb-pillar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-pillar__bar",
    style: {
      background: 'var(--gradient-brand)',
      backgroundPosition: `${i * 33}% 0`
    }
  }), /*#__PURE__*/React.createElement("h3", {
    className: "wb-pillar__title"
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "wb-pillar__desc"
  }, d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '40px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "gradient",
    size: "lg"
  }, "Explore the Framery"))));
}

/* --- Transformation partner (3 steps) --- */
const STEPS = [['Prove value', 'Start with one use case. Get your solution in days. Experience impact in weeks.'], ['Scale', 'More use cases. Shared context. Faster every time.'], ['Transform', 'AI foundation running your enterprise operations.']];
function Transform() {
  return /*#__PURE__*/React.createElement("section", {
    className: "wb-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-wrap"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "wb-h2"
  }, "Your AI transformation partner"), /*#__PURE__*/React.createElement("p", {
    className: "wb-lede"
  }, "Your team owns strategy, roadmap, and what makes your business unique. Unframe delivers the operational AI \u2014 managed end to end."), /*#__PURE__*/React.createElement("div", {
    className: "wb-grid3",
    style: {
      marginTop: '36px'
    }
  }, STEPS.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "wb-step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-step__num"
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("h3", {
    className: "wb-step__title"
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "wb-step__desc"
  }, d))))));
}

/* --- Testimonials carousel --- */
const QUOTES = [{
  q: "Our ability to draw meaningful insights and deliver client outcomes has been significantly enhanced by working with Unframe. We are aggressively pushing forward with Unframe.",
  name: 'Salumeh Companieh',
  role: 'Chief Digital & Information Officer',
  co: 'Cushman & Wakefield'
}, {
  q: "Unframe went into impressive depth to understand our workflows and set an important puzzle piece for NZZ's AI strategy. We are building toward a long-term success story together.",
  name: 'Volker Dietzel',
  role: 'CTIO',
  co: 'NZZ'
}, {
  q: "I never thought that we could get our solution in 15 days. The chat, the suggestions, the daily briefs are all the best parts of AI for our exact needs.",
  name: 'Guillermo Diaz',
  role: 'Chief Financial Officer',
  co: 'Dorothy Gaynor'
}];
function Testimonials() {
  const {
    Avatar,
    IconButton
  } = window.UnframeDesignSystem_548518;
  const [i, setI] = useStateS(0);
  const t = QUOTES[i];
  const go = d => setI(p => (p + d + QUOTES.length) % QUOTES.length);
  return /*#__PURE__*/React.createElement("section", {
    className: "wb-section wb-section--subtle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-quotehead"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "wb-h2"
  }, "What our customers say"), /*#__PURE__*/React.createElement("div", {
    className: "wb-quotenav"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Previous",
    variant: "outline",
    onClick: () => go(-1)
  }, "\u2190"), /*#__PURE__*/React.createElement(IconButton, {
    label: "Next",
    variant: "outline",
    onClick: () => go(1)
  }, "\u2192"))), /*#__PURE__*/React.createElement("blockquote", {
    className: "wb-quote"
  }, /*#__PURE__*/React.createElement("p", {
    className: "wb-quote__text"
  }, "\u201C", t.q, "\u201D"), /*#__PURE__*/React.createElement("div", {
    className: "wb-quote__by"
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: t.name.split(' ').map(w => w[0]).slice(0, 2).join(''),
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "wb-quote__name"
  }, t.name), /*#__PURE__*/React.createElement("div", {
    className: "wb-quote__role"
  }, t.role, ", ", t.co)))), /*#__PURE__*/React.createElement("div", {
    className: "wb-dots"
  }, QUOTES.map((_, k) => /*#__PURE__*/React.createElement("span", {
    key: k,
    className: 'wb-dot' + (k === i ? ' is-active' : ''),
    onClick: () => setI(k)
  })))));
}

/* --- Closing CTA (dark) --- */
function ClosingCTA() {
  const {
    Button
  } = window.UnframeDesignSystem_548518;
  return /*#__PURE__*/React.createElement("section", {
    className: "wb-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-cta__glow",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wb-wrap wb-cta__inner"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "wb-cta__title"
  }, "Bring AI into your operations. Fast."), /*#__PURE__*/React.createElement("p", {
    className: "wb-cta__sub"
  }, "Tell us your hardest, highest-stakes operational challenge. We'll provide a production-grade AI solution in days. Within weeks, see business impact."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    className: "wb-btn-white"
  }, "Let's connect")));
}
Object.assign(window, {
  Outcomes,
  Impact,
  Framery,
  Transform,
  Testimonials,
  ClosingCTA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WebSections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.CheckItem = __ds_scope.CheckItem;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ColumnCard = __ds_scope.ColumnCard;

__ds_ns.CTASection = __ds_scope.CTASection;

__ds_ns.FrameryPillars = __ds_scope.FrameryPillars;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.IndustryGrid = __ds_scope.IndustryGrid;

__ds_ns.LogoWall = __ds_scope.LogoWall;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteNav = __ds_scope.SiteNav;

__ds_ns.Testimonials = __ds_scope.Testimonials;

})();
