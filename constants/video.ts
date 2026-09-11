const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

// Cloudinary public ID of the final cinematic video (video resource, not an
// image) uploaded for the full-screen VideoHero section above the Hero.
const VIDEO_PUBLIC_ID = "Web_Video_v.2_pymrlq";

/**
 * Cloudinary video delivery URL for the full-screen cinematic section shown
 * above the Hero (see components/VideoHero.tsx). Built from the existing
 * NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME env var, so it stays correct across
 * environments.
 *
 * Explicitly `f_mp4` (not `f_auto`) — `f_auto` lets Cloudinary negotiate the
 * container/codec per browser (e.g. it serves WebM/VP9 to Chromium instead
 * of MP4/H.264), which we're ruling out as a variable while debugging video
 * playback. `q_auto` still applies automatic quality/bitrate optimization.
 * Resolves to `undefined` (VideoHero then shows a clean Sapphire Blue
 * background, no video/placeholder) only if the cloud name isn't configured.
 */
export const VIDEO_HERO_SRC: string | undefined = CLOUD_NAME
  ? `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/f_mp4,q_auto/${VIDEO_PUBLIC_ID}.mp4`
  : undefined;
