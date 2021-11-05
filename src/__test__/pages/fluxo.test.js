import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Search from "../../components/Search";
import Cep from "../../components/Cep";
import Providers from "../../providers";
import App from "../../App";
import api from "../../services/index";
import MockAdapter from "axios-mock-adapter";

const Mocker = new MockAdapter(api);


describe('Search to CEP', () => {
    test("Must be able to find the zip code", async () => {
        Mocker.onPost("/cep").replyOnce(200, {});

        render(<Providers> <Search /> </Providers>)

        const input = screen.getByPlaceholderText('Insira o CEP')
        const button = screen.getByText('Buscar pelo CEP')

        fireEvent.change(input, {target: {value: 78650000 }});
        fireEvent.click(button);

        waitFor(() => {
            expect(input).toHaveValue(78650000)

        })
    })
})