import { useNavigate } from "react-router-dom";

export default function LoginMenu({ show, onClose }: {
  show: () => void; 
  onClose: () => void;
}) {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    onClose(); // ferme le popup
    navigate("/ajout"); // redirige vers la page ajout
  };

  if (!show) return null; // si show = false, ne rien afficher

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <h2 className="text-lg font-semibold mb-4">Connexion requise</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // 👉 ici tu mets ta logique réelle de connexion
            handleLoginSuccess();
          }}
          className="flex flex-col space-y-3"
        >
          <input
            type="email"
            placeholder="Email"
            className="border px-2 py-1 rounded"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="border px-2 py-1 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-1 rounded hover:bg-blue-700 transition"
          >
            Se connecter
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-3 text-sm text-gray-500 hover:text-gray-700"
        >
          Annuler
        </button>
      </div>
    </div>
  );
}
