export const LinkForm = ({ toggle }: {
  toggle: (value: boolean) => void;
}) => {
  return (
    <a
      onClick={() => toggle(true)} // ouvre le formulaire
      className="text-sky-600 cursor-pointer"
    >
      formulaire
    </a>
  );
};
