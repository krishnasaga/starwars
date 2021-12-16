const theme = {
    colors: {
        text: "hsl(10, 20%, 20%)",
        background: "hsl(0,70%,4%)",
        primary: "hsl(10, 80%, 50%)",
        secondary: "hsl(10, 60%, 50%)",
        highlight: "hsl(11,21%,25%)",
        purple: "hsl(250, 60%, 30%)",
        muted: "hsl(10, 20%, 94%)",
        gray: "hsl(10, 20%, 50%)"
    },
    fonts: {
        body: "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif",
        heading: "inherit",
        monospace: "Menlo, monospace"
    },
    fontSizes: [
        12,
        14,
        16,
        20,
        24,
        32,
        48,
        64,
        72
    ],
    fontWeights: {
        body: 400,
        heading: 700,
        display: 900
    },
    lineHeights: {
        body: 1.5,
        heading: 1.25
    },
    text: {
        heading: {
            fontFamily: "heading",
            fontWeight: "heading",
            lineHeight: "heading"
        },
        display: {
            variant: "text.heading",
            fontSize: [
                5,
                6
            ],
            fontWeight: "display",
            letterSpacing: "-0.03em",
            mt: 3
        }
    }
}

export default theme;