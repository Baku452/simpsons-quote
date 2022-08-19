import { fireEvent, render, screen } from "@testing-library/react"
import { Search } from "."

test("input filling", () => {

    const mockSetCharacter = jest.fn()
    render(<Search  characterName="Homer" setCharacterName={mockSetCharacter}/>)
    const input = screen.getByLabelText("search-input") as HTMLInputElement;
    
    fireEvent.change(input, {target: {value: 'Homer'}})
    expect(input.value).toBe('Homer')
    expect(mockSetCharacter).toHaveBeenCalledTimes(0)
})