import { FACEBOOK_PAGE_URL, ZALO_CONTACT_URL } from "../config";

export function openFacebook() {
  window.open(FACEBOOK_PAGE_URL, "_blank", "noopener,noreferrer");
}

export function openZalo() {
  window.open(ZALO_CONTACT_URL, "_blank", "noopener,noreferrer");
}
