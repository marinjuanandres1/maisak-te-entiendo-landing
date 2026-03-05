const SHEET_NAME = "General";
const SECRET_TOKEN = "wX7qMhVr7ouABik0DIcEPOMxeQ23qh9OOxDg";

function doPost(e) {
  try {
    const token = e.parameter && e.parameter.token ? e.parameter.token : "";
    if (token !== SECRET_TOKEN) {
      return ContentService
        .createTextOutput(JSON.stringify({ ok: false, error: "Unauthorized" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    if (!e.postData || !e.postData.contents) {
      throw new Error("Missing body");
    }

    const body = JSON.parse(e.postData.contents);

    // Required fields (match sheet columns: timestamp, name, email, whatsapp)
    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const whatsapp = (body.whatsapp || "").trim();

    if (!name || !email || !whatsapp) {
      return ContentService
        .createTextOutput(JSON.stringify({ ok: false, error: "Missing required fields" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) throw new Error("Sheet not found: " + SHEET_NAME);

    const row = [
      new Date().toISOString(),
      name,
      email,
      whatsapp,
    ];

    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
