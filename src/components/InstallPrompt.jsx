import { Download, X } from "lucide-react";
import { useEffect, useState } from "react";

const isIosDevice = () =>
  /iphone|ipad|ipod/i.test(window.navigator.userAgent) ||
  (window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);

const isStandalone = () =>
  window.matchMedia("(display-mode: standalone)").matches ||
  window.navigator.standalone === true;

const InstallPrompt = () => {
  const [installEvent, setInstallEvent] = useState(null);
  const [isIos, setIsIos] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);

  useEffect(() => {
    if (isStandalone()) return undefined;

    const ios = isIosDevice();
    setIsIos(ios);
    setIsVisible(ios);

    const handleBeforeInstallPrompt = (event) => {
      setInstallEvent(event);
      setIsVisible(true);
    };

    const handleAppInstalled = () => {
      setIsInstalling(false);
      setIsVisible(false);
      setInstallEvent(null);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstall = async () => {
    if (isIos || !installEvent) return;

    setIsInstalling(true);
    await installEvent.prompt();
    const { outcome } = await installEvent.userChoice;
    if (outcome !== "accepted") setIsInstalling(false);
    setInstallEvent(null);
  };

  if (!isVisible) return null;

  return (
    <aside className="install-prompt" aria-live="polite">
      <button
        className="install-close"
        type="button"
        onClick={() => setIsVisible(false)}
        aria-label="Fermer la fenêtre d'installation"
      >
        <X size={18} aria-hidden="true" />
      </button>
      <div className="install-prompt-icon">
        <Download size={22} aria-hidden="true" />
      </div>
      <div className="install-prompt-content">
        <strong>Installer OD Holding</strong>
        {isIos ? (
          <p>
            Appuyez sur <strong>Partager</strong>, puis <strong>Sur l’écran d’accueil</strong> dans Safari.
          </p>
        ) : (
          <p>Installez l’application pour la retrouver rapidement sur votre téléphone.</p>
        )}
      </div>
      {!isIos && (
        <button
          className="install-prompt-button"
          type="button"
          onClick={handleInstall}
          disabled={isInstalling}
        >
          {isInstalling ? "Installation..." : "Installer"}
        </button>
      )}
    </aside>
  );
};

export default InstallPrompt;
