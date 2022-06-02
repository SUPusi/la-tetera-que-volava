// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010100010101010000000000000000010000010000000001000101010101000000000100000000010000000000010101010001000000000100010100000100000100010000000001000001010101000100000100000101010000000000000100000001010001000000010101000100000000000100010001000000010001000001010101000100010000000100010000000000010001000100000001000100000000000000010001000000010000010101000100000100010000000100000100010001000001000101000001000001010100010000000000000000010000000000000100010101010100000101010101010101000100000000`, img`
2 2 2 2 2 2 2 2 2 . 2 2 2 2 . 2 
. . . . . . 2 . . 2 . . . . 2 . 
2 2 2 2 2 . . . . 2 . . . . 2 . 
. . . . 2 2 2 2 . 2 . . . . 2 . 
2 2 . . 2 . . 2 . 2 . . . . 2 . 
2 2 2 2 2 . 2 . . 2 . . 2 2 2 . 
2 . . . . . . . . 2 2 . 2 . . . 
2 2 2 . 2 . . . . . 2 . 2 . 2 . 
. . 2 . 2 . . 2 2 2 2 . 2 . 2 . 
. . 2 . 2 . . . . . 2 . 2 . 2 . 
. . 2 . 2 . . . . . . . 2 . 2 . 
. . 2 . . 2 2 2 . 2 . . 2 . 2 . 
. . 2 . . 2 . 2 . 2 . . 2 . 2 2 
. . 2 . . 2 2 2 . 2 . . . . . . 
. . 2 . . . . . . 2 . 2 2 2 2 2 
. . 2 2 2 2 2 2 2 2 . 2 . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
