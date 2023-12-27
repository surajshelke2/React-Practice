import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import categories from "../category";
import '../css/form.css'

const schema = z.object({
  description: z
    .string()
    .min(3)
    .max(50, { message: "Description should be between 3 and 50 characters" }),
  amount: z
    .number()
    .min(0.1, { message: "Amount should be greater than 0" })
    .max(10000, { message: "Amount should be less than 10,000" }),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

const ExpensesForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(schema),
  });

  return (
    <form
      className="expense-form-container"
      onSubmit={handleSubmit((data) => {
        onSubmit(data), reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          id="description"
          type="text"
          className={`form-control ${errors.description ? "is-invalid" : ""}`}
          {...register("description", { required: true })}
        />
        {errors.description && (
          <div className="invalid-feedback">{errors.description.message}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          className={`form-control ${errors.amount ? "is-invalid" : ""}`}
          {...register("amount", { required: true, valueAsNumber: true })}
        />
        {errors.amount && (
          <div className="invalid-feedback">{errors.amount.message}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Categories
        </label>
        <select
          id="category"
          className={`form-select ${errors.category ? "is-invalid" : ""}`}
          {...register("category")}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <div className="invalid-feedback">{errors.category.message}</div>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ExpensesForm;
