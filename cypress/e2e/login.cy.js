describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/login');
  });

  it('should display login page correctly', () => {
    // Verificate element that should be accessible
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button').contains(/^Login$/).should('be.visible');
  })

  it('should display alert when email is empty', () => {
    // Click login button without filling up the email
    cy.get('button').contains(/^Login$/).click();

    // Verify window.alert for show API response message
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty')
    })
  })

  it('should display alert when password is empty', () => {
    // Click login button without filling up the email
    cy.get('button').contains(/^Login$/).click();

    // Verify window.alert for show API response message
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty')
    })
  })


  it('should display alert when email is invalid', () => {
    // Fill email input
    cy.get('input[placeholder="Email"]').type('fira');


    // Click login button without filling up the email
    cy.get('button').contains(/^Login$/).click();

    // Verify window.alert for show API response message
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" must be a valid email')
    })
  })

  it('should display alert when username and password are wrong', () => {
    // mengisi username
    cy.get('input[placeholder="Email"]').type('invalidemail');

    // mengisi password yang salah
    cy.get('input[placeholder="Password"]').type('wrong_password');

    // menekan tombol Login
    cy.get('button').contains(/^Login$/).click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('User ID or password is wrong');
    });
  });

  it('should display homepage when email and password are correct', () => {
    // mengisi username
    cy.get('input[placeholder="Email"]').type('rfd@gmail.com');

    // mengisi password
    cy.get('input[placeholder="Password"]').type('Rfd12345');

    // menekan tombol Login
    cy.get('button').contains(/^Login$/).click();

    // memverifikasi bahwa elemen yang berada di homepage ditampilkan
    cy.get('button > .flex').contains('Logout').should('be.visible');
  });
})

