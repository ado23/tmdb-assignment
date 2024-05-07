import { render, screen } from "@testing-library/react";
import MediaDetails from "./MediaDetails";

describe("MediaDetails component", () => {
  const defaultProps = {
    title: "Test Title",
    rating: 4.5,
    imgUrl: "test-image.jpg",
    videoUrl: null,
    tagline: "Test Tagline",
    overview: "Test Overview",
    voteCount: 100,
    releaseDate: "2021-01-01",
    originalTitle: "Original Test Title"
  };

  it("renders the media title", () => {
    render(<MediaDetails {...defaultProps} />);
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });

  it("renders the original title", () => {
    render(<MediaDetails {...defaultProps} />);
    expect(screen.getByText(`Original Title: ${defaultProps.originalTitle}`)).toBeInTheDocument();
  });

  it("renders the release date", () => {
    render(<MediaDetails {...defaultProps} />);
    expect(screen.getByText(defaultProps.releaseDate)).toBeInTheDocument();
  });

  it("renders the vote count", () => {
    render(<MediaDetails {...defaultProps} />);
    expect(screen.getByText(defaultProps.voteCount.toLocaleString())).toBeInTheDocument();
  });

  it("renders the tagline", () => {
    render(<MediaDetails {...defaultProps} />);
    expect(screen.getByText(defaultProps.tagline)).toBeInTheDocument();
  });

  it("renders the overview", () => {
    render(<MediaDetails {...defaultProps} />);
    expect(screen.getByText("Overview:")).toBeInTheDocument();
    expect(screen.getByText(defaultProps.overview)).toBeInTheDocument();
  });

  it("renders the image if videoUrl is null", () => {
    render(<MediaDetails {...defaultProps} />);
    expect(screen.getByAltText(defaultProps.title)).toBeInTheDocument();
  });

  it("renders the video if videoUrl is not null", () => {
    const videoProps = {
      ...defaultProps,
      videoUrl: "test-video.mp4"
    };
    render(<MediaDetails {...videoProps} />);
    expect(screen.getByTitle(`video-${defaultProps.title}`)).toBeInTheDocument();
  });
});
