"use strict";
// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.
module.exports = {
    config: {
        // choose either `'stable'` for receiving highly polished,
        // or `'canary'` for less polished but more frequent updates
        updateChannel: 'stable',
        // default font size in pixels for all tabs
        fontSize: 14,
        // font family with optional fallbacks
	    // 'Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace'
        fontFamily:  'MesloLGS NF, Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
        // default font weight: 'normal' or 'bold'
        fontWeight: 'normal',
        // font weight for bold characters: 'normal' or 'bold'
        fontWeightBold: 'normal',
        // line height as a relative unit
        lineHeight: 1,
        // letter spacing as a relative unit
        letterSpacing: 1,
        // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
        cursorColor: '#ffffff',
        // terminal text color under BLOCK cursor
        cursorAccentColor: '#000',
        // `'BEAM'` for |, `'UNDERLINE'` for _, `'BLOCK'` for █
        cursorShape: 'BLOCK',
        // set to `true` (without backticks and without quotes) for blinking cursor
        cursorBlink: true,
        // color of the text
        foregroundColor: '#FFFBFD',
        // terminal background color
        // opacity is only supported on macOS
        backgroundColor: '#000',
        // terminal selection color
        selectionColor: '#ffffff',
        // border color (window, tabs)
        borderColor: '#333',
        // custom CSS to embed in the main window
	    css: '', //'.term_fit:not(.term_term) {opacity: 1 !important}'
        // custom CSS to embed in the terminal window
        termCSS: '',
        // set custom startup directory (must be an absolute path)
        workingDirectory: '',
        // if you're using a Linux setup which show native menus, set to false
        // default: `true` on Linux, `true` on Windows, ignored on macOS
        showHamburgerMenu: '',
        // set to `false` (without backticks and without quotes) if you want to hide the minimize, maximize and close buttons
        // additionally, set to `'left'` if you want them on the left, like in Ubuntu
        // default: `true` (without backticks and without quotes) on Windows and Linux, ignored on macOS
        showWindowControls: '',
        // custom padding (CSS format, i.e.: `top right bottom left`)
        padding: '12px 14px',
        // Supported Options:
        //  1. 'SOUND' -> Enables the bell as a sound
        //  2. false: turns off the bell
        bell: 'SOUND',
        // An absolute file path to a sound file on the machine.
        // bellSoundURL: '/path/to/sound/file',
        // if `true` (without backticks and without quotes), selected text will automatically be copied to the clipboard
        copyOnSelect: true,
        // if `true` (without backticks and without quotes), hyper will be set as the default protocol client for SSH
        defaultSSHApp: true,
        // if `true` (without backticks and without quotes), on right click selected text will be copied or pasted if no
        // selection is present (`true` by default on Windows and disables the context menu feature)
        quickEdit: false,
        // choose either `'vertical'`, if you want the column mode when Option key is hold during selection (Default)
        // or `'force'`, if you want to force selection regardless of whether the terminal is in mouse events mode
        // (inside tmux or vim with mouse mode enabled for example).
        macOptionSelectionMode: 'vertical',
        // Whether to use the WebGL renderer. Set it to false to use canvas-based
        // rendering (slower, but supports transparent backgrounds)
        webGLRenderer: true,
        // keypress required for weblink activation: [ctrl|alt|meta|shift]
        // todo: does not pick up config changes automatically, need to restart terminal :/
        webLinksActivationKey: '',
        // if `false` (without backticks and without quotes), Hyper will use ligatures provided by some fonts
        disableLigatures: true,
        // set to true to disable auto updates
        disableAutoUpdates: false,
        // set to true to enable screen reading apps (like NVDA) to read the contents of the terminal
        screenReaderMode: false,
        // set to true to preserve working directory when creating splits or tabs
        preserveCWD: true,
        // the number of rows to be persisted in terminal buffer for scrolling
        scrollback: 100000,
        // the full list. if you're going to provide the full color palette,
        // including the 6 x 6 color cubes and the grayscale map, just provide
        // an array here instead of a color map object
        // the shell to run when spawning a new session 
        //
        // Windows
        // - Make sure to use a full path if the binary name doesn't work
        // - Remove `--login` in shellArgs
        //
        // Windows Subsystem for Linux (WSL) - previously Bash on Windows
        // - Example: `C:\\Windows\\System32\\wsl.exe`
        //
        // Git-bash on Windows
        // - Example: `C:\\Program Files\\Git\\bin\\bash.exe`
        //
        // PowerShell on Windows
        // - Example: `C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`
        //
        // Cygwin
        // - Example: `C:\\cygwin64\\bin\\bash.exe`
        shell: `C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`,
        // for setting shell arguments (i.e. for using interactive shellArgs: `['-i']`)
        // by default `['--login']` will be used 
        shellArgs: [],
        // for environment variables
        env: { TERM: 'cygwin' },
        colors: {
            black: '#000000',
            red: '#C51E14',
            green: '#1DC121',
            yellow: '#C7C329',
            blue: '#0A2FC4',
            magenta: '#C839C5',
            cyan: '#20C5C6',
            white: '#C7C7C7',
            lightBlack: '#686868',
            lightRed: '#FD6F6B',
            lightGreen: '#67F86F',
            lightYellow: '#FFFA72',
            lightBlue: '#6A76FB',
            lightMagenta: '#FD7CFC',
            lightCyan: '#68FDFE',
            lightWhite: '#FFFFFF',
            limeGreen: '#32CD32',
            lightCoral: '#F08080',

        },
        // Chỉnh kích thước terminal
        hyperWindowSize: {
            width: 1140,
            height: 680
        },
        // Custom viền terminal
        hyperBorder: {
            animate: {
                duration: '1',  // Thoi gian chuyen mau
            },
            // borderColors: ['random','random'], 
            // blurredColors: ['random','random'],
            borderWidth: '15px' // Do rong cua border
        },
        // Here lies our background image.
        // backgroundImage: "C:/Users/Trung.Hoang/Pictures/Background/terminal.jpg",
        opacity: 0.99, // Do mo background
        // Line status dưới cùng
        hyperStatusLine: {
            dirtyColor: 'salmon',
            aheadColor: 'ivory',
            footerTransparent: true, // Do lam mo
        },
        // Theme
        catppuccinTheme: 'Frappé', // "Macchiato", "Frappé", "Mocha", "Latte"
        // Custom scrollbar
        scrollbarColor: 'darkcyan', // any valid css color: 'tomato', 'skyblue', 'crimson', 'hotpink', 'yellowgreen', 'slategray' ...
        scrollbarOpacity: 0.1, // value between 0 and 1 - độ đậm của thanh scrollbar

        // Tự động thực thi command khi Hyper launche
        //commands: ['clear'],
        hyperTabs: {
            trafficButtons: true,
            border: true,
            tabIcons: true,
            tabIconsColored: true,
            activityColor: 'tomato',
            activityPulse: true,
        },

        // for advanced config flags please refer to https://hyper.is/#cfg
    },
    // a list of plugins to fetch and install from npm
    // format: [@org/]project[#version]
    // examples:
    //   `hyperborder
    //   `@company/project`
    //   `project#1.0.1`

    // Không nên cài hypercwd vì khi mở tab mới sẽ bị lỗi!
    plugins: ["hyperborder", "hyper-window-size", "hyper-fading-scrollbar",  // "hyper-background"
        "hyper-pane", "hyper-alt-click", "hyperterm-cursor", "hypurr#latest",  "hyper-startup", 
        "hyper-tabs-enhanced", 
    ],

    // in development, you can create a directory under
    // `~/.hyper_plugins/local/` and include it here
    // to load it and avoid it being `npm install`ed
    localPlugins: [],
    keymaps: {
    // Example
    "editor:copy": "ctrl+c",
    "editor:break": "ctrl+shift+c",
    "tab:new": "ctrl+t",
    // "window:devtools": "cmd+alt+o",
    },
};
//# sourceMappingURL=config-default.js.map