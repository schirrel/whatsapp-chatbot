# WhatsBot
WhatsBot can be attached to any WhatsApp account and it will respond to message containing specific commands. 

## Example Commands
As an example following two commands has been added. A message is considered as command if it starts with an exclamation mark(!). 

### `echo` Command
```
!echo This is a message
```
This will echo the given string (This is a message) in reply to the message.

### `github` Command
```
!github cstayyab WALC
```
This will return the information of the github repository in reply to the message. Here is a sample reply:

```
*cstayyab/WALC*
*Description:* A WhatsApp Desktop client for linux systems. This is an unofficial client. Use https://web.whatsapp.com for official web client as official desktop client for linux does not exist.
*Forks:* 5
*Stars:* 19
*License:* GNU General Public License v3.0
```

## Other Usecases
It can be deployed by people who are running a store and want to give users the facility to order a product. The sample commands can be following:

```
!list 
```
The "list" commands can list products with the unique identifier that can be used in subsequent commands.

```
!order P1303 4
```
The above commands orders the product P1303 and quantity 4.


# Contributions
You are welcome to controibute to routines folder. Create a script with a set of commands and functions. You can find an example in `routines/github.js` file.
