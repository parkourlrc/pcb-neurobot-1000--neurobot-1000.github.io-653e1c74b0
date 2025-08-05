import { withMermaid } from "vitepress-plugin-mermaid";
import {
	buildPackagesNavbar,
	buildPcbDesignNavbar,
	buildToolsNavbar,
} from "../scripts/buildNavbars.mts";
import {
	buildBldcModelingSidebar,
	buildFreecadGearboxGeneratorSidebar,
	buildPcbDesignSidebar,
	buildToolsSidebar,
} from "../scripts/buildSidebars.mts";

// https://vitepress.dev/reference/site-config
export default withMermaid({
	title: "Neurobot-1000",
	description: "Our cute AI overlord, given physical form",
	srcDir: "packages",
	rewrites: {
		"pcb-design/:board/docs/:slug": "boards/:board/:slug",
		"tools/:slug": "tools/:slug",
		"bldc-modeling/docs/:slug": "bldc/:slug",
		":pkg/docs/:slug": ":pkg/:slug",
	},
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Wiki", link: "/wiki" },
			{ text: "Tools", items: buildToolsNavbar() },
			{ text: "Packages", items: buildPackagesNavbar() },
			{ text: "Boards", items: buildPcbDesignNavbar() },
			{ text: "BLDC", link: "/bldc" },
			{ text: "Contributing", link: "/contributing" },
		],

		sidebar: {
			"/tools": buildToolsSidebar(),
			"/wiki": [
				{
					text: "General",
					items: [
						{ text: "Overview", link: "/wiki" },
						{ text: "Safety Training", link: "/wiki/safety-training" },
					],
				},
				{
					text: "Progress Update",
					items: [
						{ text: "Mechanical System", link: "/wiki/mechanical-progress" },
						{ text: "Electronic System", link: "/wiki/electronic-progress" },
						{ text: "Control System", link: "/wiki/control-progress" },
					],
				},
				{
					text: "Electro-Mechanical Discussion",
					items: [
						{ text: "Artificial Muscles", link: "/wiki/artificial-muscles" },
						{ text: "Hands", link: "/wiki/hands" },
						{ text: "Brushless Motors", link: "/wiki/brushless-motors" },
						{ text: "Energy Storage", link: "/wiki/energy-storage" },
					],
				},
				{
					text: "Sensor & Control Discussion",
					items: [
						{ text: "Eyes", link: "/wiki/eyes" },
						{ text: "Ears", link: "/wiki/ears" },
						{ text: "Touch", link: "/wiki/touch-sensors" },
						{ text: "Sparse Neural Network", link: "/wiki/touch-sensors" },
					],
				},
				{
					text: "Manufacturing Discussion",
					items: [
						{
							text: "Multi-material 3D printing",
							link: "/wiki/multi-material-3d-printing",
						},
					],
				},
			],
			"/boards": buildPcbDesignSidebar(),
			"/freecad-gearbox-generator": buildFreecadGearboxGeneratorSidebar(),
			"/bldc": buildBldcModelingSidebar(),
		},

		socialLinks: [
			{ icon: "github", link: "https://github.com/neurobot-1000" },
			{ icon: "discord", link: "https://discord.gg/MZPyedT" },
		],
	},
	markdown: {
		math: true,
		image: {
			lazyLoading: true,
		},
	},
});
