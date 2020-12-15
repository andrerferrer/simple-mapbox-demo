## Usage

First clone this repository to your laptop. You must have Node (> v4) and [yarn](https://yarnpkg.com/lang/en/docs/install/) installed.

```bash
cd ~/code/$USER
git clone git@github.com:andrerferrer/simple-mapbox-demo.git mapbox
cd mapbox
yarn install
touch .env
st .env # Open this file in Sublime Text
```

In this file, you should add the MAPBOX API KEY. [You can grab it here.](https://account.mapbox.com/)
like this:
    ```
      MAPBOX_API_KEY=pk.eyJ1IjoiZXBlbXMiLCJhIjoiY2tpZzFob2FmMGZ1ZTJxczE0MGcwdGsxeCJ9.EsWnqWxeKm7EGNTbUxV-Cw
    ```

And you're good to go 🤓.

### [How to add the dotenv-webpack plugin ?](https://github.com/andrerferrer/quickTips/blob/master/Webpacker/config_dotenv.md)
