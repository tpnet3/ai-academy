const STORAGE_KEY = "h78h87gyuh89jihgtvujimnh8ui9ytfc";

export async function digestMessage(message: string) {
  const msgUint8 = new TextEncoder().encode(message + STORAGE_KEY); // encode as (utf-8) Uint8Array
  const hashBuffer = await window.crypto.subtle.digest("SHA-256", msgUint8); // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join(""); // convert bytes to hex string
  return hashHex;
}
