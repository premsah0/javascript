const event = 
{
    data: 
    {
      birthday: "",
      created_at: 1654012591514,
      email_addresses: 
      [
        {
          email_address: "example@example.org",
          id: "idn_29w83yL7CwVlJXylYLxcslromF1",
          linked_to: [],
          object: "email_address",
          verification: 
          {
            status: "verified",
            strategy: "ticket",
          },
        },
      ],
      external_accounts: [],
      external_id: "567772",
      first_name: "Example",
      gender: "",
      id: "user_29w83sxmDNGwOuEthce5gg56FcC",
      image_url: "https://img.clerk.com/xxxxxx",
      last_name: "Example",
      last_sign_in_at: 1654012591514,
      object: "user",
      password_enabled: true,
      phone_numbers: [],
      primary_email_address_id: "idn_29w83yL7CwVlJXylYLxcslromF1",
      primary_phone_number_id: null,
      primary_web3_wallet_id: null,
      private_metadata: {},
      profile_image_url: "https://www.gravatar.com/avatar?d=mp",
      public_metadata: {},
      two_factor_enabled: false,
      unsafe_metadata: {},
      updated_at: 1654012591835,
      username: null,
      web3_wallets: [],
    },
    object: "event",
    type: "user.created",
  };
  

  const email_address = event.data.email_addresses[0].email_address
  console.log(email_address);
  
  