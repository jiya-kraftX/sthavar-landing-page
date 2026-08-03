"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const MAP_LABEL = "Dapoli, Ratnagiri District, Maharashtra";
// Pinned to Dapoli's town-center coordinates rather than a text search —
// a free-text query lets Google resolve to an unrelated nearby business.
const MAP_COORDS = "17.75,73.1833";
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${MAP_COORDS}&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${MAP_COORDS}`;

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
