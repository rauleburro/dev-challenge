interface DetailArrayFieldProps {
  label: string;
  array: string[];
}

const DetailArrayField = ({ label, array }: DetailArrayFieldProps) => {
  return (
    <div className="flex flex-row space-x-2 items-center">
      <span className="block text-gray-500 dark:text-gray-400">{label}:</span>
      {array.length > 0 &&
        array.map((item: string, index) => (
          <span key={index} className="block bg-primary dark:bg-primaryDark text-white dark:text-gray-600 border rounded-full px-4 py-1">
            {item}
          </span>
        ))}
    </div>
  );
};

export default DetailArrayField;
