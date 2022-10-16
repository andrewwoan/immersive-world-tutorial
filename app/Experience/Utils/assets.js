export default [
    {
        whiterun: {
            assets: [
                {
                    name: "landscape",
                    type: "glbModel",
                    path: "/models/Landscape_w_collider.glb",
                },
                {
                    name: "landscape_items",
                    type: "glbModel",
                    path: "/models/Landscape_items.glb",
                },
                {
                    name: "breezhome",
                    type: "glbModel",
                    path: "/models/Breezehome.glb",
                },
                {
                    name: "breezehome_texture",
                    type: "imageTexture",
                    path: "/textures/breezehome_diffuse.webp",
                },
                {
                    name: "landscape_texture",
                    type: "imageTexture",
                    path: "/textures/landscape_diffuse.webp",
                },
            ],
        },
        breezhomeInterior: {
            assets: [
                {
                    name: "breezhome_interior",
                    type: "glbModel",
                    path: "/models/Interior_w_collider.glb",
                },
                {
                    name: "breezhome_items",
                    type: "glbModel",
                    path: "/models/Interior_items.glb",
                },
                {
                    name: "interior_diffuse",
                    type: "imageTexture",
                    path: "/textures/interior_diffuse.webp",
                },
            ],
        },
    },
];
