import { DisneylandResort } from "./DisneylandResort.js";
async function main() {
    let disneyland = undefined;
    let dca = undefined;
    const disneylandResort = new DisneylandResort();
    await disneylandResort.setDisneyland();
    await disneylandResort.setDCA();
    disneyland = disneylandResort.getDisneyland();
    dca = disneylandResort.getDCA();
    if (disneyland) {
        console.log("Disneyland:", disneyland.toString());
    }
    else {
        console.log("Failed to retrieve Disneyland data.");
    }
    if (dca) {
        console.log("DCA:", dca.toString());
    }
    else {
        console.log("Failed to retrieve DCA data.");
    }
}
main().catch((error) => {
    console.error("An error occurred:", error);
});
