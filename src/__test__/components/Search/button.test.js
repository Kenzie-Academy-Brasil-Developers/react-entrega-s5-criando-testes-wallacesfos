import { render, screen } from "@testing-library/react";
import Search from "../../../components/Search"

describe("Test search page button",() => {
    test("Must render a button", () => {
        render(<Search />)
        
        expect(screen.getByText("Buscar pelo CEP"))
    })
})  