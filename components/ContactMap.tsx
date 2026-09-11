"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PROJECT_MAP_LINK } from "@/constants/contact";

const MAP_LABEL = "Blue Breeze Project, Harnai Beach, Dapoli, Maharashtra 415713";
// The official Google Maps short link (PROJECT_MAP_LINK) is a redirect, so
// it isn't reliably embeddable as an <iframe> src — use the same place's
// address as a text query for the embed instead, and keep the official
// short link for the actual click-through / "Open in Google Maps" action.
const MAP_QUERY = encodeURIComponent(
  "Blue Breeze Project, Harnai Beach, At & Post Harnai, Dapoli, Maharashtra 415713"
);
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;
const MAP_LINK = PROJECT_MAP_LINK;

export function ContactMap() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-linear-to-br from-navy via-navy-light to-navy-dark p-6 text-center">
        <Icon name="map-pin" className="h-8 w-8 text-gold-light/60" />
        <Button href={MAP_LINK} target="_blank" rel="noopener noreferrer" variant="primary">
          Open in Google Maps
        </Button>
      </div>
    );
  }

  return (
    <iframe
      src={MAP_EMBED_SRC}
      title={`Map — ${MAP_LABEL}`}
      className="h-full w-full border-0"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      onError={() => setFailed(true)}
    />
  );
}
