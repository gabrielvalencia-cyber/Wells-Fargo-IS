## Unframe Framework — build conventions

This is the Unframe product's component library; the inventory is under `## Components`.
Build every screen from it, **including the space and text between components**: that is
`Stack`, `Text`, `Panel` and `Section`, never a styled `div`. Cards with a job have a name
(`KpiCard`, `NoteCard`, `RowCard`, `TaskCard`, `AgentCard`, `DashboardWidget`); `Panel` is for a
region none of them fits.

### Before building anything — map the screen to real components first
If the request doesn't name components, don't start generating: first say which components
from `## Components` fill each region, and name what the system doesn't cover. Never
approximate a missing one out of `div`s — a bespoke lookalike is worse than a named gap.

### Non-negotiables
Output violating any of these is off-system and will be rejected in review:

1. **No invented colours.** Every colour comes from a `--color-*` or `--avatar-*` token.
   No hex literals, no `rgb()`, no CSS colour names. There is no pink button in this
   system — primary actions are `--color-purple-600`. Purple is a **fill, never text on
   an action**: a text button is gray-800, a link is blue-600 and underlined.
2. **No invented components.** Compose what's in `## Components`. A `div` styled to be a
   heading, box, row, button, table, modal, tab or menu is an invented component.
3. **No invented props.** Each component's `.prompt.md` lists its actual props; an
   unrecognised prop is silently ignored at runtime. Same for enum values —
   `variant`/`severity`/`size` accept only the documented literals.
4. **No raw interactive elements.** `<button>`, `<input>`, `<select>`, `<textarea>`,
   `<table>`, `<dialog>` have equivalents, and **no `div` or `span` gets an `onClick`** —
   that is a hand-rolled button.
5. **No raw type or spacing.** Never put `font-size`, `font-weight`, `line-height`,
   `letter-spacing`, `text-transform`, `padding`, `margin` or `gap` in a `style`. Text is
   `Text` — `page-title` `title` `section-title` `strong` `body` `label` `caption`. Space is
   `Stack gap` — `4 8 12 16 24 32` — or `Panel padding` — `16 24`. A px value is only a width
   or height. Inter only; radius from `--radius-md|lg|xl|2xl`.
6. **No pale text.** Prose is `--text-primary`, `--text-secondary` or `--text-muted` only —
   `gray-500` and lighter are for icons, borders and disabled states; as text they fail
   contrast outright.
7. **No AI-voice copy.** UI text is plain, literal, sentence case. No em/en dashes, no
   exclamation marks, no ALL-CAPS words or uppercase styling, no hype words ("seamlessly", "unlock"). Full
   rules: the microcopy guide in `guidelines/`, rendered as the `MicrocopyGuide` card.

When in doubt, prefer the boring composition. Consistency is the requirement here.

### Building a page
`AppShell` (it owns the page gutter) holding a `Stack gap={24}`: `PageHeader`, then one `Panel`
per region, each holding a `Section`. Inside a section, `Stack` lays out and `Text` sets
anything not already in a component. Never a `Panel` inside a `Panel` — separate with `Divider`.

### In prototype files (`.dc.html`)
Attributes become props and child markup becomes `children`; nothing else. So a prop that takes
an element can't be set from one. Give `PageHeader` and `Section` their `actions` as data —
`[{ label, onClick, variant, icon }]` from `renderVals` — and compose everything else as children.

### Reaching for the wrong component is as bad as inventing one
A component that merely *looks* like the thing needed still comes out wrong. Refuse these
substitutions:

| Don't use | Because | Use instead |
|---|---|---|
| `Tabs` as a stepper | tabs are peer views in any order; steps are ordered, with completion state | `Stepper`, `WizardStepper` (full-screen), `WorkflowStepCard` (in chat) |
| `Tabs` as filters | filters narrow one view, they don't switch views | `TableToolbar`, `DrawerSectionActionFilter`, `PillSelect`, `SelectButton` |
| `Chip` for status | `Chip` is a removable token for an entity or filter value | `Tag`, `StatusRenderer`, `DotIndicator` |
| `Dialog` for a record's details | `Dialog` is a centred modal that blocks the page | `DrawerPanel` + `DrawerSection` |
| `Menu`/`PopupMenu` for right-click | both anchor beneath a click trigger | `ContextMenu`, cursor-positioned |
| a label beside `Input` for a stored field | that's a form control, not a record field | `EditableValue` |
| `Select` for a chooser | a native `<select>` the browser paints itself | `Dropdown` |
| `Toast` for an error or warning | it times out — may never be seen | `Alert` |
| `SelectButton` for a page's sections | it sets a **value inside one view**; it switches nothing and carries no content | `Tabs` — pass `activeKey`/`onChange` and render large bodies yourself |
| `Textarea` as a chat composer | a form field: it resizes and leaves send detached | `ChatInput` |
| a hand-built chat history | `ChatSideBar` has New chat, search and sections | `ChatSideBar` |
| purple text for an action | purple is the primary button's **fill**, never its text; on its own it reads as neither link nor button | `Button variant="text"` (gray-800) to act, `Link` (blue-600, underlined) to go |

### Which component do I reach for
The system often names things unexpectedly. Start here, then confirm against
`## Components`:

| You need… | Look for |
|---|---|
| a page frame, sidebar, top bar, tabs | `AppShell` — owns the 32px gutter, never pad its children; `SideBar`, `TopBar`, `Tabs`, `WorkspaceTabs` |
| a page title with actions | `PageHeader` |
| rows of records, sorting, filtering | `TableCard` (toolbar + table + filters in one frame; never stack them as two cards), `DataTable`, `EntityDataTable`, `AgGridTable` |
| a detail panel beside a list | `DrawerPanel` + `DrawerSection` + `DrawerEntityField` |
| a record's fields, editable in place | `EditableValue` — one row per field, never a label beside `Input`; it handles text, date, status, badges and "Not set" |
| numbers / trends at the top of a page | `KpiCard`, `KpiCardGrid`, `MetricProgressBar` |
| charts, dashboard tiles, maps | `Chart`, `DashboardWidget`, `DashboardGrid`, `MapView` |
| editing a dashboard — drag, resize, add widgets | `DashboardCanvas` (drag/resize behavior), `WidgetsDropdown` (add) |
| a form | `Input` carries its own label, hint and error — never wrap it. `FormField` adds that chrome to `Dropdown`, `Textarea`, `Checkbox`, `DatePicker`, `ToggleSwitch`, `MultiSelect` |
| a modal, confirmation, or upload | `Dialog`, `ConfirmationModal`, `UploadDialog` |
| telling the user something happened | `Alert` persists; `Toast` floats and times out (**success only**); `ContextualNotification` is an AI nudge about one record |
| something that navigates | `Link` — blue-600, underlined. Buttons act, links go |
| status, labels, scores | `Tag`, `StatusRenderer`, `DotIndicator`, `ConfidenceIndicator` |
| the Unframe logo | `BrandLogo` — lockup or mark, used as-is, never rebuilt |
| an automation/workflow builder canvas | `WorkflowCanvas` — pass `nodes`/`edges`; drag, connect, pan and zoom are live, and a node's settings open in a `NodeDrawer` |
| an agent's own detail page | `AgentProfileHeader` — atop a page or `DrawerPanel`, never in a list; `AgentCard` is the gallery tile for the same entity |
| empty / loading states | `AgGridTableEmptyState` and `WidgetEmptyState` with an `EntityGlyph`; `LoadingDots` for a wait in place, `Skeleton`, `Loader`, `ImageWithShimmer` |

### Screen shapes this system supports
Match the request to a shape before inventing structure. All of these sit inside `AppShell`,
with `PageHeader` at the top of the content area.

| Shape | Built from |
|---|---|
| List + detail | `TableCard` wrapping `DataTable`, plus a `DrawerPanel` of `DrawerSection`s for the selected row. Status cells are `Tag` or `StatusRenderer`, never coloured text |
| Dashboard | `KpiCardGrid` for headline numbers, then `DashboardWidget` tiles wrapping `Chart` or `MapView`; `WidgetEmptyState` when there's no data |
| Card gallery or picker | a grid of `AgentCard`, `LandingPageCard` or `RowCard`; `EntityCardWidgetContent` for compact tiles |
| Assistant / chat | `ChatSideBar` for history, a transcript of `ChatUserMessage`/`ChatAssistantMessage`, `ChatProcessingSteps` for agent work, `ChatInput` at the bottom |
| Settings / form | `SettingsLayout` with `SideBarSecondary` for sections, each field as `Input` or `FormField`, `Button` actions right-aligned |
| Multi-step flow | `Stepper` inline, `WizardStepper` full-screen; in chat use `WorkflowStepCard` and `WorkflowSelectionOption` |
| Extraction review | `ConfidenceTableRenderer`, `ConfidenceListRenderer` or `ConfidenceMapRenderer`, with `ConfidenceIndicator` per value and `FieldAuditTrailPopover` for history |
| Notes / activity | `NoteThread` of `NoteCard`s with `NoteComposer`; `ActivityLog` or `ActivityLogDrawer` for history; `TaskCard` for actions |
| Document / file | `PdfHighlightsRenderer` or `ViewerObjectTabular` (tabular data goes in `DataTable`); `UploadDialog` and `UploadProgressPanel` to get files in |
| Map | `MapView` with `MapPin` and `MapZoomControl`; `WidgetMap` for the dashboard-tile version |

**Not exhaustive** — if a request fits none of these, compose from the inventory and name
the closest shape.

### Setup
No provider or root wrapper — just the stylesheet once at the app root (see `## Loading`).

### Colour comes from tokens
Space and type come from components (non-negotiable 5). Rhythm: `24` between page sections,
`16` inside a panel, `8` from a label to its value. Colour is these properties, set at `:root`:

| Family | Example variables | Use for |
|---|---|---|
| Brand purple | `--color-purple-50` … `--color-purple-950` | primary actions, brand accents (buttons use `-600`) |
| Blue / Green / Error / Orange / Amber / Teal / Pink | `--color-{name}-50…950` | status, info, success, warning, danger states |
| Gray | `--color-gray-50` … `--color-gray-950` | backgrounds, icons, dividers — **not prose**. Every hairline border is `gray-300`; `gray-100`/`gray-200` are fills and vanish as borders |
| Text | `--text-primary`, `--text-secondary`, `--text-muted` | all prose. Nothing else clears the 4.5:1 floor on white |
| Avatar colors | `--avatar-` + `purple`, `light-purple`, `blue`, `deep-blue`, `turquoise`, `yellow`, `orange`, `red`, `pink` | avatar/identity backgrounds. These nine are the whole set; a guess resolves to nothing |

Example: `<div style={{ background: 'var(--color-purple-50)' }}>`. Font is **Inter**, already
wired via `@font-face` in the shipped CSS — use `font-family: Inter, sans-serif` or inherit it.

### Motion
Every transition uses the motion tokens — `--duration-instant|fast|base|moderate|slow` and
`--ease-out|in-out|drawer` — never a hand-picked duration or curve, never `transition: all`.
Read the motion guide in `guidelines/` before animating anything.

### Where the truth lives
`styles.css` and `_ds_bundle.css` compile every value here, and the styling vocabulary is
`--color-*`, `--avatar-*`, `--radius-*`, `--text-*`, `--font-*`, `--duration-*`, `--ease-*`.

# UnframeFramework (framework-react-design@0.0.0)

This design system is the published framework-react-design React library, bundled as a single
browser global. All 181 components are the real upstream code.

## Where things are

- `_ds_bundle.js` — the whole-DS bundle at the project root; loads every component to `window.UnframeFramework`. First line is a `/* @ds-bundle: … */` metadata header.
- `styles.css` — the single stylesheet entry: it `@import`s the tokens, fonts, and component styles (`_ds_bundle.css`). Link this one file.
- `components/<group>/<Name>/<Name>.prompt.md` (example JSX + variants), `<Name>.d.ts` (types), `<Name>.html` (variant grid).
- `tokens/*.css` — CSS custom properties, names verbatim from upstream.
- `fonts/` — `@font-face` files + `fonts.css` (when the package ships fonts).
- `guidelines/` — the design system's own usage guidance (2 doc(s), see `guidelines/index.md`). Read these before composing larger layouts.

For a specific component, `read_file("components/<group>/<Name>/<Name>.prompt.md")`.

## Loading

Add these two lines to your page once (React must be on the page first):

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
```

Components are then available at `window.UnframeFramework.*`. Mount into a dedicated child node (e.g. `<div id="ds-root">`), not the host page's own React root, so the two trees don't collide:

```jsx
const { AccordionItemHeader } = window.UnframeFramework;
ReactDOM.createRoot(document.getElementById('ds-root')).render(<AccordionItemHeader />);
```

## Tokens

185 CSS custom properties from framework-react-design. Names are
preserved verbatim from upstream. They are declared inside `_ds_bundle.css` (this DS ships one compiled stylesheet rather than separate token files).

- **color** (124): `--color-red-600`, `--color-orange-50`, `--color-orange-100`, …
- **typography** (12): `--font-sans`, `--font-mono`, `--font-weight-light`, …
- **radius** (6): `--radius-sm`, `--radius-md`, `--radius-lg`, …
- **other** (43): `--spacing`, `--container-xs`, `--container-sm`, …

## Components

### general
- `AccordionItemHeader` — Clickable header row for a collapsible section: lead icon, title with optional count or fraction, subtitle, actions and a chevron.
- `ActivityLog` — Chronological list of activity entries, each with an avatar, actor, action text and timestamp. Shows an empty state when there are none.
- `ActivityLogDrawer` — Drawer section wrapping ActivityLog with a filter action, for showing an entity's history in a side panel.
- `AgentCard` — Gallery or picker tile for an agent, in four shapes that share one shell.
- `AgentProfileHeader` — The header of an agent's own detail page. Not for lists, where AgentCard is the tile.
- `AgGridTable` — Dense data grid for large tabular datasets, driven by column definitions and a row key. Prefer DataTable for ordinary product tables.
- `AgGridTableEmptyState` — Empty or loading placeholder for AgGridTable: icon, primary and secondary message, and optional action buttons.
- `AiAssistant` — AI assistant side panel: header actions, context chips, empty state or thread, and ChatInput.
- `AiGeneratedCard` — Card for AI-generated prose: brand sparkle, title, a fading body and a provenance footer.
- `AiInsightsPanel` — The dashboard's AI insight panel, with its answer and loading states.
- `Alert` — A persistent notice that sits in the layout. Errors and warnings go here, not in a Toast.
- `AppShell` — Top-level page frame: full-height sidebar, optional top bar and a content panel. The standard outer shell for a product screen.
- `AssistantButton` — Floating trigger that opens the AI assistant, in several visual variants.
- `AutoComplete` — Labelled text input that filters a list of suggestions as the user types.
- `Avatar` — Circular user avatar showing an image or coloured initials, in sizes XS through L.
- `AvatarGroup` — Overlapping avatars with a +N overflow and an optional add-person button.
- `BrandLogo` — The Unframe logo. This is the only sanctioned way to put the mark on screen  the files
- `Button` — Primary action control: variants primary, outline, text and danger, three sizes,
- `CardLevelInsights` — Insight card for an entity: level badge, title, paragraph, value and updated time, with optional featured, draggable and expand affordances.
- `CardLevelInsightsRow` — A titled, wrapping row of CardLevelInsights cards.
- `Chart` — Chart wrapper for bar, line, area and pie types, with series config, stacking, horizontal layout, legend and an inner label for donuts.
- `ChatAssistantMessage` — One assistant turn: optional processing steps, a body, and an optional interaction bar.
- `ChatInput` — The chat composer: a text row, then agent selector, attach, mention, mic and send.
- `ChatInteractionBar` — Action bar under an assistant message: copy, share, regenerate, rate and sources.
- `ChatLoader` — Thinking / streaming indicator: the system's three-dot loader, with an optional label.
- `ChatProcessingSteps` — A collapsible 'N processing steps' header that reveals what the agent did.
- `ChatSideBar` — Chat history sidebar: New chat, search, sections of conversations and archived chats.
- `ChatUserMessage` — The user's question in a chat, as a purple-50 bubble.
- `Checkbox` — Labelled checkbox for boolean and multi-select input, with indeterminate and error states.
- `Chip` — Small bordered token for an entity or filter value, with an optional leading icon and a remove control.
- `CollapsibleSection` — A bordered card whose header toggles its body, with an optional Show more footer.
- `ColorPalette` — Documentation of the colour tokens. Not a product component, never on a screen.
- `ConfidenceIndicator` — A ring whose fill shows confidence: perfect, high, fair or low.
- `ConfidenceListRenderer` — Drawer section listing extracted field values with their confidence, for document review workflows.
- `ConfidenceMapRenderer` — Drawer section placing extracted values on a map, with confidence shown per entry.
- `ConfidenceTableRenderer` — Drawer section presenting extracted values as a searchable table, with confidence shown per row.
- `ConfirmationModal` — Blocking confirm or cancel dialog for a destructive or irreversible action, with configurable labels and a danger variant.
- `ConnectionEmptyState` — The nothing-connected-yet panel inside a node drawer.
- `ConnectionRow` — A connected or available thing in a node's drawer  a data contract, an integration, an MCP
- `ContextMenu` — Right-click menu: a cursor-positioned panel of icon and label rows in sections.
- `ContextualNotification` — An AI nudge about one record, shown beside it.
- `CopyButton` — Copies a value to the clipboard and briefly confirms that it copied.
- `DashboardCanvas` — Live dashboard editing: drag to reorder and resize widgets on a grid.
- `DashboardGrid` — Reference dashboard composition: KPI cards above Chart widgets and a recent-records table. A layout example rather than a generic container.
- `DashboardWidget` — Titled dashboard tile wrapping any chart or content, with expand, collapse, menu, AI insights and remove affordances and a loading state.
- `DataTable` — The standard product table: sortable columns, row selection, row actions, sticky header, pagination, empty state and three densities.
- `DatePicker` — Labelled date input with a calendar affordance.
- `Dialog` — Modal container with a title, close control, body and optional footer, at a configurable width.
- `Divider` — Horizontal or vertical rule, with an optional inline label.
- `DotIndicator` — A haloed dot or icon with a label, for a status at a glance.
- `DotSelect` — Select whose options each carry a coloured status dot, for picking a state or category.
- `DrawerEntityField` — Labelled field in a drawer showing one or more related entities, with an edit affordance.
- `DrawerPanel` — Sliding side panel for the detail view of a selected record, built from a list of content blocks.
- `DrawerSection` — Titled, optionally collapsible section inside a drawer, with room for header actions.
- `DrawerSectionActionBase` — Base icon plus label action button used in a drawer section header.
- `DrawerSectionActionFilter` — Drawer section header filter: a searchable checkbox list with select all, for narrowing what the section shows.
- `Dropdown` — A select drawn as an input: icon, value or placeholder, a chevron and a clear control.
- `DropdownMenu` — The floating list behind selects and menus: search, select all, rich rows, empty state.
- `EditableValue` — A label and value row that turns into an editor in place. For a record's fields.
- `EntityCardWidgetContent` — Body of an entity card widget: a compact record list with loading, error and no-records states.
- `EntityCardWidgetDialog` — Configuration dialog for an entity card widget: title, data source and which fields to show.
- `EntityConfirmationDialog` — Entity-aware confirmation dialog that names the record and action, with a processing state.
- `EntityDataTable` — Entity list screen body: search, column filters and an add action over a paginated DataTable.
- `EntityFormDialog` — Create or edit dialog for an entity record, with save and cancel actions and a progress indicator.
- `EntityGlyph` — Large entity marks, a glyph inside a badge, for empty states and headers.
- `EntityIcon` — The mark that stands for a record: a folder, a document, a connected source.
- `EntitySelectField` — Labelled multi-select for people or records, showing chosen entities as avatars with an overflow count.
- `EntitySelectRenderer` — Read-only row of selected entities with an add button and a link into the full drawer.
- `ExpandableSearch` — Search affordance that starts as an icon and expands into a full input on focus, with a clear control.
- `ExpandButtonBar` — The Show more and Show less bar at the bottom of a collapsible card.
- `FieldAuditTrailPopover` — Popover showing a field's edit history, who changed it and when, with an empty state before any edits.
- `FileDropZone` — Drag-and-drop target for files, with waiting, hover and rejected states.
- `FileUploadItem`
- `FloatLabel` — Wrapper that floats a field's label above the input once it has focus or a value.
- `FormField` — Label, control, hint  the same chrome Input carries, for the controls that don't.
- `Icon` — Renders one of the design system's SVG icons by name, at a given size and colour.
- `IconButton` — Icon-only button in three weights: extra bold, bold and quiet.
- `IconButtonRenderer` — Icon button that toggles between an active and inactive icon and label, for on or off row actions.
- `IconWrapper` — A glyph in a bordered container, in five sizes and a neutral or brand tone.
- `ImageWithShimmer` — Image that shows a Skeleton shimmer while loading and falls back to text if it fails.
- `InlineFieldInput` — Borderless input for editing a value in place, single or multi line, with an error state.
- `Input` — Labelled text input: label with required or optional, icons, hint and error state.
- `InputNumber` — Labelled numeric input with min, max, step and an optional unit suffix.
- `KpiCard` — Single headline metric: large value, subtitle and an optional trend direction with delta.
- `KpiCardGrid` — Responsive row of KpiCards for the headline metrics at the top of a page.
- `LandingPageCard` — Entry-point tile on a landing page: icon, title, subtitle, description and actions, with a coming soon disabled state.
- `LazyEntitySelect` — Searchable select for large entity lists that loads more results as you scroll, with loading and error states.
- `Link` — A navigational link, blue-600 and underlined. Buttons act, links go.
- `Loader` — Spinner for inline and in-container loading, in several sizes.
- `LoadingDots` — The system's loading animation  three dots that jump and settle in turn, ported frame for
- `MapPin` — Map marker: teardrop pin, circle badge or cluster pill.
- `MapView` — A full map with pins and clusters, a Show list toggle, basemap toggle and zoom control.
- `MapZoomControl` — The map's zoom control: a white pill with plus and minus.
- `Menu` — Dropdown menu of actions anchored to a trigger element. The panel is portalled and
- `MetricProgressBar` — Labelled progress bar whose colour changes as the value crosses severity thresholds.
- `MicrocopyGuide` — Documentation surface  the product's writing rules, mirroring guidelines/microcopy.md.
- `MultiSelect` — Labelled multi-select whose chosen values appear as removable Chips.
- `NodeDrawer` — The settings panel for the selected node on a workflow canvas.
- `NodeDrawerSection` — One bordered settings block inside a NodeDrawer.
- `NoteAttachment` — File or link attached to a note, with a thumbnail or icon and an optional remove control.
- `NoteCard` — One note in a thread: author avatar, body, timestamp, tags, attachments and an actions menu.
- `NoteComposer` — Note input with the author's avatar, mention, attachment and formatting affordances, and a submit action.
- `NoteThread` — A note plus its replies, with an inline composer for adding another reply.
- `NotificationBell` — Composed from shared atoms instead of re-deriving them: IconButton
- `NotificationsButton` — Thin bell trigger with an unread dot  for toolbars that don't need the
- `PageHeader` — Page title with optional description and right-aligned action buttons. The top of most screens.
- `Panel` — The plain white box cards are drawn in. For a page region that no named card fits.
- `PdfHighlightsDialog` — Full-screen dialog for reviewing a highlighted passage in a PDF, with position within the set of matches.
- `PdfHighlightsRenderer` — Static placeholder for the page canvas  the real component renders PDF.js canvases + a text/highlight overlay.
- `PermissionWrapper` — Renders its children only when the user has access, otherwise a restricted placeholder.
- `PillSelect` — Dropdown, with a Tag badge on the rows  the field itself is the core Dropdown,
- `PlusRoundButton` — Small circular plus button for adding an item to a list or field.
- `Popover` — Floating panel anchored to a trigger, for extra detail without leaving the page.
- `PopupMenu` — Context menu of actions anchored to a trigger, with configurable alignment and width.
- `ProcessingDialog` — A multi-step loading modal: what a dialog turns into while confirmed work runs.
- `ProgressBar` — Determinate progress bar from 0 to 100, with an optional percentage label.
- `ProgressIndicator` — A thin progress line, or a segmented one with a state per segment.
- `RadioButton` — Radio button for choosing one option from a set, in three sizes, with error and confirmed states.
- `ResizeDivider` — The boundary between two panes that can be dragged to resize them.
- `ResizeIndicator` — Selection and resize handles overlaid on a widget's bounds.
- `ResponseCard` — A saveable result card inside a chat: toolbar, body and footer actions.
- `RowCard` — Horizontal summary row: icon, title and status left, metadata and a menu right.
- `SearchInput` — Search field: magnifier, text, a clear control and an optional trailing action.
- `Section` — A titled block in a page or Panel: title, description and actions, then its content.
- `Select` — Labelled single-select dropdown with placeholder and three sizes.
- `SelectButton` — Segmented control for switching between a few mutually exclusive options.
- `SelectionOption` — A selectable row or card: icon, title, badges, subtitle and a checkbox or radio.
- `SettingsLayout` — Settings-area layout frame  the secondary nav panel on the left with page content on the
- `ShareDialog` — The share and permissions modal: general access, invite by email and member roles.
- `ShowMoreButton` — Toggle that expands or collapses a truncated list, showing how many items remain.
- `SideBar` — Primary navigation sidebar: logo, top and bottom item groups, user menu, and collapse to an icon rail.
- `SidebarItem` — Sidebar nav row, per the Chat file's full Section header / item comps
- `SidebarItemAction` — Icon action shown on a sidebar row, revealed on hover, with a tooltip.
- `SidebarItemBadge` — Small count or status badge on a sidebar navigation row.
- `SideBarSecondary` — Secondary (e.g. Settings) navigation panel per the framework's SideBarSecondary.vue.
- `SidebarSection` — Collapsible sidebar group, per the Chat file's Section comps (node
- `Skeleton` — Grey placeholder block or circle shown while content loads.
- `Slider` — A range slider: gray track, purple fill and a white thumb with a grip.
- `SourceIcon` — Logo for an external data source such as Slack or Salesforce.
- `Splitter` — Horizontal split container whose panes really can be resized by dragging the
- `SplitterPanel` — One resizable pane inside a Splitter, with an initial size (percent).
- `Stack` — A column or row with a gap from the spacing scale. Use it for space between components.
- `StatusRenderer` — A status as a DotIndicator, optionally inside a gray pill. For table cells.
- `Stepper` — Inline progress through numbered steps joined by lines, labels beside or below.
- `TableCard` — One frame around a table: toolbar, table and pagination share a single border, with the
- `TableToolbar` — Toolbar above a table: search, filter, clear filters, customise columns, export, and primary or secondary actions.
- `Tabs` — Horizontal tab strip for peer views of the same page or record.
- `Tag` — Small status or category label in a severity colour, with an optional 12px leading icon.
- `TagSelect` — Select whose chosen values render as coloured Tags, mapping each option to a severity.
- `TaskCard` — Task row: done checkbox, title, description, status and priority tags, due date, attributes and assignee avatars.
- `Text` — Text in one of seven roles. Use it for any heading, label or value instead of a font size.
- `Textarea` — Labelled multi-line text input with an error state.
- `TextFormattingToolbar` — Rich-text controls: text style, inline formats and alignment.
- `Toast` — A floating confirmation that times out. Success only, errors go in an Alert.
- `ToastViewport` — The fixed top-center stack that Toasts appear in. Render one near the root.
- `ToggleSwitch` — Labelled on or off switch for a boolean setting, in two sizes.
- `ToggleSwitchRenderer` — Controlled ToggleSwitch for use as a table cell or field renderer.
- `Tooltip` — Small label revealed on hover.
- `TopBar` — Top navigation bar per the framework's TopBar.vue  title/description or logo on the left, actions on the right.
- `TourCompletionModal` — Guided-tour completion dialog, with an image.
- `TourSpotlight` — Wraps the real control a tour points at: a purple ring over a dimmed page.
- `TourTooltip` — A guided-tour step card that points at a control.
- `TourWelcomeModal` — Guided-tour intro dialog, with or without an image.
- `UnfSelect` — Select styled per the Unframe framework, with an optional icon beside the chosen value.
- `UploadDialog` — File upload dialog listing queued files with per-file progress and removal, plus an upload action.
- `UploadProgressPanel` — A file upload panel docked at the bottom of the screen, with a collapsible list.
- `UserAvatarMenu` — Account menu in the sidebar footer: avatar, name, email, role tag, manage account and log out.
- `ViewerObjectTabular` — Label and value list for viewing a record's fields, with a no-data state.
- `WidgetEmptyState` — Illustrated empty state for a dashboard widget, by reason type with a custom message.
- `WidgetIcon`
- `WidgetMap` — A titled map panel for dashboards  wraps MapView with an empty state.
- `WidgetsDropdown` — The add-a-widget picker: an optional Create with AI card and a list of widget types.
- `WizardStepper` — A full-screen multi-step flow: step rail on the left, content column, bottom bar.
- `WorkflowCanvas` — The workflow builder board. Pass nodes and edges and drag, connect, pan and zoom are live.
- `WorkflowNode` — One step card on a workflow canvas, in its four static states.
- `WorkflowSelectionOption` — A selectable row inside a WorkflowStepCard. Thin wrapper over SelectionOption, the general
- `WorkflowStartNode` — The single entry point of a workflow: a small pill, not a full node card.
- `WorkflowStepCard` — A guided-flow step card in a chat: header, body and footer actions for any step type.
- `WorkspaceTabs` — A purple-50 bar of entity tabs, with add and overflow.
- `XlsxBundleExportDialog` — Export dialog for choosing scope and which sheets to include in an XLSX bundle.

### keystone
- `KeystoneTransactionsScreen` — Keystone transactions screen, ported from the real app. An app-specific composition, not a reusable component.
