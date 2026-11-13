import { useActionState, use } from "react";
import { OpinionsContext } from "../store/opinions-context";
import Submit from "./Submit.jsx";
export function NewOpinion() {
  const { addOpinion } = use(OpinionsContext);

  async function handleSubmit(prevFormState, formData) {
    const userName = formData.get("userName");
    const title = formData.get("title");
    const body = formData.get("body");

    const errors = [];
    if (!userName.trim()) {
      errors.push("Please enter userName .");
    }
    if (title.trim().length < 5) {
      errors.push("Title should be 5 chracters long");
    }
    if (body.trim().length < 10 || body.trim().length > 300) {
      errors.push("Opinion must be between 10 to 300 chracters long . ");
    }
    if (errors.length > 0) {
      return {
        errors,
        userValues: { userName, title, body },
      };
    }
    await addOpinion({ title, body, userName });
    return {
      errors: null,
    };
  }

  const [formState, formAction] = useActionState(handleSubmit, {
    errors: null,
  });

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" defaultValue={formState.userValues?.userName} />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={formState.userValues?.title} />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} defaultValue={formState.userValues?.body}></textarea>
        </p>
        {formState.errors && (
          <ul className="errors">
            {formState.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        <Submit />
      </form>
    </div>
  );
}
