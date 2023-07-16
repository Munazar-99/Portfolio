import { render, screen } from "@testing-library/react";
import Home  from "../pages/index";
import { HomePage, Image } from "../../typings";

// Mock the Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: jest.fn((props: any) => <img {...props} />),
}));

describe("Home Component", () => {
  const mockHomePage: HomePage = {
    _createdAt: "2022-01-01",
    _id: "1",
    _rev: "1",
    _type: "homepage",
    _updatedAt: "2022-01-01",
    title: "Developer Portfolio - Munazar Ali",
    introduction: "Experienced software developer",
    heroImage: {
      _type: "image",
      asset: {
        _ref: "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg",
        _type: "reference",
      },
    },
    socials: [],
    logo: {
      _type: "image",
      asset: {
        _ref: "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg",
        _type: "reference",
      },
    },
    body: "",
  };

  beforeEach(() => {
    render(<Home homepage={mockHomePage} />);
  });

  it("renders the hero image correctly", () => {
    const imageElement = screen.getByAltText("munazar");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      "src",
      "https://cdn.sanity.io/images/vt6lhkqo/production/Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000.jpg"
    );
    expect(imageElement).toHaveAttribute("width", "500");
    expect(imageElement).toHaveAttribute("height", "500");
  });

  it("renders the resume link correctly", () => {
    const resumeLink = screen.getByRole("link", { name: /Resume/ });
    expect(resumeLink).toBeInTheDocument();
    expect(resumeLink).toHaveAttribute("href", "/MunazarAli_FullStackDeveloper.pdf");
    expect(resumeLink).toHaveAttribute("target", "_blank");
  });

  it("renders the contact link correctly", () => {
    const contactLink = screen.getByRole("link", { name: /Contact/ });
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute("href", "mailto:munazar.ali.001@gmail.com");
  });
});