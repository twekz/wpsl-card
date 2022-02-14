# WPSL Card block

Generic card block for development-friendly customization in WordPress themes.

## Configuration

- Install plugin.
- Customize naming if necessary:
  - Plugin `name` and `description` in `card.php`
  - `title`, `name`, `description` in `block.json`
- Activate plugin in WP admin.
- Import `card.scss` in theme custom style. Use variables to customize card rendering.

## Options

### Add full style without importing `card.scss` into your theme stylesheet

- Edit `card.scss` variables if necessary.
- @import `card.scss` in `src/style.scss`
- Run `npm build` to rebuild production files.

### Override block rendering on front-end

WPSL Cards are dynamic blocks, meaning their front-end is rendered in PHP and can be overridden in your theme's `function.php` file.

```php
remove_filter('wpsl_card_render', 'wpsl_card_render_block');

add_filter('wpsl_card_render', 'your_theme_render_callback');

function your_theme_render_callback ($params) {
  return '<div>Your card render</div>';
}
```

Render callback parameters:

- `url` – URL to link
- `imageId` – selected image's WordPress ID
- `title` (optional) – card title, set in editor

## SCSS variables in `card.scss`
```scss
// Global settings
$wpsl_card-z-index-base:                 10 !default;
$wpsl_card-cover-aspect-ratio:           3/4 !default;

// Overlay settings
$wpsl_card-show-overlay:                 true !default;
$wpsl_card-overlay-color:                #000 !default;
$wpsl_card-overlay-transition-duration:  250ms !default;
$wpsl_card-overlay-transition-easing:    linear !default;
$wpsl_card-overlay-default-opacity:      0 !default;
$wpsl_card-overlay-hover-opacity:        0.3 !default;
```

## Development

- `npm start` for dev purposes
- `npm format` before build
- `npm build` for production release

See [@wordpress/create-block](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/#available-commands) documentation for details and more CLI commands.
