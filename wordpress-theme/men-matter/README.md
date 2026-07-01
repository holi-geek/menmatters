# Men Matter — WordPress Theme

A production-ready WordPress theme mirroring the Men Matter React site design.

## Install

1. Zip this `men-matter/` folder.
2. In WordPress: **Appearance → Themes → Add New → Upload Theme** → upload the zip → **Activate**.
3. Assign menus at **Appearance → Menus** (locations: *Primary Menu*, *Footer Menu*).
4. Set the homepage at **Settings → Reading → A static page → Homepage**. The theme's `front-page.php` will automatically render the Hero / About / Programs / Impact / Get Involved sections.

## Files

| File | Purpose |
|---|---|
| `style.css` | Theme header + all front-end styles (uses CSS variables mirroring the React tokens) |
| `functions.php` | Theme setup, menus, enqueues, widget area, Gutenberg support |
| `header.php` / `footer.php` | Site chrome |
| `front-page.php` | Homepage — assembles section template parts |
| `index.php` | Blog index fallback |
| `page.php` | Static pages |
| `single.php` | Single blog post |
| `archive.php` | Category / tag / date / author archives |
| `search.php` / `searchform.php` | Search |
| `404.php` | Not-found page |
| `comments.php` | Comment thread + form |
| `template-parts/section-*.php` | Hero, About, Programs, Impact, Get Involved |
| `assets/js/navigation.js` | Mobile menu toggle |
| `assets/css/editor-style.css` | Gutenberg block-editor styles |
| `assets/images/` | Hero background + logo |
| `screenshot.png` | Theme preview shown in Appearance → Themes |

## Features

- Fully responsive, mobile-first
- `wp_nav_menu()` with fallback for Primary + Footer locations
- Gutenberg support: wide/full alignment, editor styles, color palette, block styles, responsive embeds
- `the_post_thumbnail()` featured images on posts and archives
- The Loop everywhere (`have_posts()` / `the_title()` / `the_content()`)
- Custom logo, title-tag, HTML5, automatic feed links
- Translation-ready (`men-matter` text domain)
- Footer widget area
- Editable homepage content lives in `template-parts/section-*.php` (or replace with block patterns if you want fully editable sections)
