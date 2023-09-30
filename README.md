# week-2-phase-1-code-challenge-flatacuties
This is a simple voting app that allows users to vote for their favorite characters. The app uses a JSON API to fetch character data and to update vote counts.

## Features:

View a list of characters and their current vote counts.
Vote for your favorite characters.
Add new characters to the list.
How to use:

### Start the development server:
Open http://localhost:3000 in your web browser.

### Voting:
To vote for a character, click on the character's name. The character's vote count will be updated immediately.

### Adding new characters:

To add a new character, click on the "Add new character" button. A form will appear where you can enter the character's name and image URL. Click on the "Submit" button to add the new character to the list.

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