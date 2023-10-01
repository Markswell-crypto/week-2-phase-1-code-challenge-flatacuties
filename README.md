# week-2-phase-1-code-challenge-flatacuties
This is a simple voting app that allows users to vote for their favorite characters. The app uses a JSON API to fetch character data and to update vote counts.

## Features:

View a list of characters and their current vote counts.
Vote for your favorite characters.
Add new characters to the list.
How to use:

### Start the development server:
Test your server by visiting this route in the browser.
Open http://localhost:3000 in your web browser.
Then, open the `index.html` file on your browser to run the application.

## Deliverables

As a user, I can:

1. View all characters names once you have retrieved the character data from the server. You will need to make a GET request to the following endpoint to retrieve the character data:

   ```txt
   GET /characters

   Example Response:
   [
    {
      "id": 1,
      "name": "Mr. Cute",
      "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
      "votes": 0
    },
    ...
   ]
   ```

2. When the character is clicked, display the character's details. You can either use the character information from your first request, or make a new request to this endpoint to get the character's details:

   ```txt
   GET /characters/:id

   Example Response:
   {
    "id": 1,
    "name": "Mr. Cute",
    "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
    "votes": 0
   }
   ```

3. When the voting form is submitted, add the number of votes from
   the input field to the character displayed in the container. **No
   persistence is needed**.


### Voting:
To vote for a character, click on the character's name. The character's vote count will be updated immediately.

### Adding new characters:

To add a new character, click on the "Add new character" button. A form will appear where you can enter the character's name and image URL. Click on the "Submit" button to add the new character to the list.

### Bonus Deliverables

These bonus deliverables are here if you want an extra challenge and won't
affect your score. **Make sure to commit your work to save your progress before
attempting the bonus deliverables!**

In the `index.html` file, there is some additional HTML that is currently
commented out below the Reset Votes button. Remove the comments (delete the
`<!--` and `-->` code around the elements) so you can complete the bonus
deliverables.

1. When the Reset Votes button is clicked, reset the votes back to 0.

2. When the `form` is submitted, add a new character. The new character in the character bar should behave the same as the other characters when clicked (its details should be displayed below, and it should have functionality to add votes).

3. In addition to adding the character, the character's details should show up immediately in the character info section.

### API:

The app uses a JSON API to fetch character data and to update vote counts. The API endpoints are as follows:

/characters: GET - Returns a list of all characters.
/characters/:id: GET - Returns a single character.
/characters: POST - Creates a new character.
/characters/:id: PUT - Updates a single character.
Development:


### License:

This app is licensed under the MIT License.
Copyright (c) 2023 Markswell Osoro Ogutu

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.