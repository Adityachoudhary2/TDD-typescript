import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import NotesList from "./index";


const server = setupServer(
    rest.get("/notes-list", (req, res, ctx) => {
        return res(ctx.json({
            notes: [
                {
                    id: 0,
                    title: "Learn React",
                    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, "
                },
                {
                    id: 1,
                    title: "Learn React",
                    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, "
                },
                
                {
                    id: 2,
                    title: "Learn React",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, "
            },
               
            ],
          })
        );
      })
    );


describe("Given NotesList ", () => {
    beforeAll(() => {
   server.listen();
    });
})

afterEach(() => {
    server.resetHandlers();

});
afterAll(() => {
 server.close();
});

test("When notes-list component is mounted THEN render list of notes", () => {
    render(<NotesList/>);

    screen.getAllByTestId("notes-list-item");
});  
