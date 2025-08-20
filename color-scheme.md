# Color Scheme and Brand Language Documentation

This document outlines the color scheme and brand language used throughout the Kahanigalore website. The design aims to be vibrant, playful, and modern, reflecting the creative and story-telling nature of the brand.

## Primary Color Palette

The primary color palette is defined in `tailwind.config.ts` and utility classes are available in `app/globals.css`.

| Color Name      | Hex Code  | Tailwind Class        | Description                                                                 |
| --------------- | --------- | --------------------- | --------------------------------------------------------------------------- |
| **Brand Purple**| `#8b6baf` | `brand-purple`        | The main brand color, used for primary buttons, links, and important UI elements. |
| **Sky Blue**    | `#74d1f6` | `sky-blue`            | A bright, friendly blue used for secondary actions, highlights, and gradients. |
| **Leaf Green**  | `#75c044` | `leaf-green`          | A fresh green used in gradients and decorative elements to add vibrancy.      |
| **Bright Yellow**| `#fff572` | `bright-yellow`       | An energetic yellow used for accents, highlights, and call-to-action text.  |
| **Coral Red**   | `#f05656` | `coral-red`           | A warm red used for accents and to draw attention to specific elements.     |
| **Dark Charcoal**| `#231f20` | `dark-charcoal`       | The primary background and text color, providing a strong contrast.         |

## Gradients

Gradients are a key part of the brand's visual identity, used to create a dynamic and engaging user experience.

| Gradient Name              | CSS Class                  | Colors Used                                       |
| -------------------------- | -------------------------- | ------------------------------------------------- |
| **Text Gradient**          | `gradient-text`            | Purple, Blue, Green, Yellow                       |
| **Celesta Gradient**       | `bg-gradient-celesta`      | Purple, Blue, Green, Yellow, Red                  |
| **Purple-Blue Gradient**   | `bg-gradient-purple-blue`  | Purple, Blue                                      |
| **Green-Yellow Gradient**  | `bg-gradient-green-yellow` | Green, Yellow                                     |

## Component-Specific Usage

### Navbar

*   **Background:** `dark-charcoal` (`#231f20`)
*   **Text:** `white`
*   **Links:** `white` on inactive, `sky-blue` (`#74d1f6`) on hover.
*   **Logo:** Uses the `gradient-text` class for a multi-color effect.

### Hero Section

*   **Background:** `dark-charcoal` (`#231f20`)
*   **Headline Text:** `bright-yellow` (`#fff572`)
*   **Primary Button:** `bg-gradient-to-r from-brand-purple to-sky-blue`
*   **Secondary Button:** `border-brand-purple`, `text-brand-purple`, hover: `bg-brand-purple`, `text-white`

### Services Section

*   **Icons and Highlights:** Uses the primary color palette (`brand-purple`, `sky-blue`, `leaf-green`, `bright-yellow`) to differentiate services and add visual interest.

### Review Carousel

*   **UI Elements:** Uses `brand-purple` and `sky-blue` for navigation controls and accents.

### Photo Gallery

*   **Overlay/Hovers:** May use a semi-transparent `dark-charcoal` overlay with text in `white` or `bright-yellow`.

### Footer

*   **Background:** `dark-charcoal` (`#231f20`)
*   **Text:** `white`
*   **Links:** `sky-blue` (`#74d1f6`) or `bright-yellow` (`#fff572`)

## Brand Language

The brand's language is **playful, creative, and inspiring**. The copy should be engaging and imaginative, using storytelling to connect with the audience. The tone is friendly and approachable, avoiding overly corporate or technical jargon.

This documentation should serve as a guide for any future development or design work to ensure a consistent and cohesive brand experience across the entire website.
