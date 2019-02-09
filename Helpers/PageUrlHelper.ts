require('dotenv').config()

export function amazonURL(): string {
    return process.env.AmazonURL;
}