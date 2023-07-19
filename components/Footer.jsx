export const Footer = (input) => {
  return (
    <div className="mt-3">
      <p className="text-secondary text-center">
        copyright © {input.year} {input.fullName} {input.studentId}
      </p>
    </div>
  );
};
