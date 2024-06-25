import { fireEvent, render } from "@testing-library/react";
import Counter from "@/Counter";

describe("<Counter /> test", () => {
  it("matches snapshot", () => {
    const utils = renderCounter();
    expect(utils.container).toMatchSnapshot();
  });

  it("screen test", () => {
    const counter = renderCounter();

    const h2 = counter.container.querySelector("h2");
    h2 && expect(h2.innerHTML).toBe("COUNTER");
  });

  it("increment button test", () => {
    const counter = renderCounter();

    const count = counter.container.querySelector("p");
    const incrementButton = counter.getByText("+");

    fireEvent.click(incrementButton);
    count && expect(count.innerHTML).toBe("1");
  });

  it("decrement button test", () => {
    const counter = renderCounter();

    const count = counter.container.querySelector("p");
    const decrementButton = counter.getByText("-");

    fireEvent.click(decrementButton);
    count && expect(count.innerHTML).toBe("-1");
  });
});

const renderCounter = () => {
  return render(<Counter />);
};
