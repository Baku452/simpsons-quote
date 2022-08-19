import { render, screen } from "@testing-library/react";
import { CardQuote } from "./index";

describe("Test Component", () => {
    test("Render content", () => {
        const quoteContent = {
            quote: "Eat my shorts",
            character: "Bart Simpson",
            image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638",
            characterDirection: "Right"
        }
    
        render(<CardQuote {...quoteContent}/>)
        const imageCard = screen.getByRole('img');
        const quoteBlock = screen.getByText(quoteContent.quote);
        const characteName = screen.getByText(quoteContent.character);
        
        expect(imageCard).toHaveProperty('src', quoteContent.image);
        expect(quoteBlock).toBeInTheDocument();
        expect(characteName).toBeInTheDocument();

    })
})