import { defineConfig } from 'astro/config';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    site: 'https://spf.lol',
    integrations: [icon({
        include: {
            twemoji: ["*"],
            "skill-icons": ["*"],
            mdi: ["*"]
        }
    })],
});
