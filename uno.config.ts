import {
    defineConfig,
    presetUno,
    presetWebFonts,
    presetWind,
} from 'unocss';

export default defineConfig({
    content: {
        pipeline: {
            include: [
                /\.(vue|html)($|\?)/,
                'src/shared/styles/modules/*.{ts}',
            ],
        },
    },

    presets: [
        presetUno(),
        presetWind(),
        presetWebFonts({
            provider: 'google', // default provider
            fonts: {
                // these will extend the default theme,
                'montserrat': ['Montserrat:200,300,400,500,600,700,800,900'],
                'spectral': ['Spectral SC', 'Spectral SC:400,600,800'],
                'cormorant-garamond': ['Cormorant Garamond Medium 500'],
                'standard': ['Old Standard TT'],
            },
        }),
    ],
    theme: {
        screens: {
            sm: '320px',
            md: '640px',
        },
        breakpoints: {
            sm: '320px',
            md: '640px',
        },
    },
    rules: [
        [/^shadow-([\w-]+)$/, ([, shadow]) => ({
            'box-shadow': `var(--shadow-${shadow})`,
        })],

        /// <size>
        [/^el-w-([\w-]+)$/, ([, width]) => ({
            'width': `var(--width-${width})`,
            'min-width': `var(--width-${width})`,
        })],
        [/^el-h-([\w-]+)$/, ([, elementHeight]) => ({
            'height': `var(--height-${elementHeight})`,
            'min-height': `var(--height-${elementHeight})`,
        })],
        [/^el-w-([\d]+)$/, ([, width]) => ({
            'width': `${width}rem`,
            'min-width': `${width}rem`,
        })],
        /// </size>

        /// <gap>
        [/^gap-y-([\d]+)$/, ([, num]) => ({
            'row-gap': `${num}rem`,
        })],
        [/^gap-x-([\d]+)$/, ([, num]) => ({
            'column-gap': `${num}rem`,
        })],
        [/^gap-([\d]+)$/, ([, num]) => ({
            gap: `${num}rem`,
        })],
        /// </gap>

        /// <colors>
        [/^border-color-([\w-]+)$/, ([, color]) => ({ 'border-color': `var(--color-${color})` })],
        [/^bg-color-([\w-]+)$/, ([, color]) => ({ 'background-color': `var(--color-${color})` })],
        [/^color-([\w-]+)$/, ([, color]) => ({ color: `var(--color-${color})` })],
        /// </colors>

        /// <margins>
        [/^m-([\d]+)$/, ([, num]) => ({ margin: `${num}rem` })],
        [/^mx-([\d]+)$/, ([, num]) => ({
            'margin-left': `${num}rem`,
            'margin-right': `${num}rem`,
        })],
        [/^my-([\d]+)$/, ([, num]) => ({
            'margin-top': `${num}rem`,
            'margin-bottom': `${num}rem`,
        })],
        [/^mb-([\d]+)$/, ([, num]) => ({
            'margin-bottom': `${num}rem`,
        })],
        [/^mt-([\d]+)$/, ([, num]) => ({
            'margin-top': `${num}rem`,
        })],
        [/^ml-([\d]+)$/, ([, num]) => ({
            'margin-left': `${num}rem`,
        })],
        [/^mr-([\d]+)$/, ([, num]) => ({
            'margin-right': `${num}rem`,
        })],
        /// </margins>

        /// <paddings>
        [/^p-([\d]+)$/, ([, num]) => ({ padding: `${num}rem` })],
        [/^px-([\d]+)$/, ([, num]) => ({
            'padding-left': `${num}rem`,
            'padding-right': `${num}rem`,
        })],
        [/^py-([\d]+)$/, ([, num]) => ({
            'padding-top': `${num}rem`,
            'padding-bottom': `${num}rem`,
        })],
        [/^pb-([\d]+)$/, ([, num]) => ({
            'padding-bottom': `${num}rem`,
        })],
        [/^pt-([\d]+)$/, ([, num]) => ({
            'padding-top': `${num}rem`,
        })],
        [/^pl-([\d]+)$/, ([, num]) => ({
            'padding-left': `${num}rem`,
        })],
        [/^pr-([\d]+)$/, ([, num]) => ({
            'padding-right': `${num}rem`,
        })],
        /// </paddings>

        /// <border-radius>
        [/^br-([\d]+)$/, ([, num]) => ({
            'border-radius': `${num}rem`,
        })],

        /// </border-radius>
        // grid rows
        [/grid-row-([\d]+)$/, ([, num]) => ({
            'grid-template-rows': `${num}rem`,
        })],
        // grid rows

        /// <border>
        [/^border-([\d]+)$/, ([, num]) => ({
            'border-width': `${num}px`,
            'border-style': 'solid',
        })],
        [/^border-bottom-([\d]+)$/, ([, num]) => ({
            'border-width': `${num}px`,
            'border-bottom': 'solid',
        })],
        /// </border>
    ],
});