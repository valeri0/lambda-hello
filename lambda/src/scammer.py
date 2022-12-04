import codecs

class Scammer:

    SCAM_TEMPLATE = "Hello, you just won 1.000.000$ for being the 1000th person to write: {}. Claim your prize today!'"

    def get_scam_message(self, input):
        return self.SCAM_TEMPLATE.format(input)