import pytest
from src.scammer import Scammer

@pytest.fixture()
def shared_scammer_obj():
    scammer = Scammer()
    yield scammer
    
def test_scam_message_with_string_input(shared_scammer_obj):
    # setup
    input = 'a normal string'
    expected = "Hello, you just won 1.000.000$ for being the 1000th person to write: a normal string. Claim your prize today!'"

    # execute
    actual = shared_scammer_obj.get_scam_message(input)

    # verify
    assert actual == expected



def test_scam_message_with_integer_input(shared_scammer_obj):
    # setup
    input = 123
    expected = "Hello, you just won 1.000.000$ for being the 1000th person to write: 123. Claim your prize today!'"

    # execute
    actual = shared_scammer_obj.get_scam_message(input)

    # verify
    assert actual == expected


def test_scam_message_with_negative_integer_input(shared_scammer_obj):
    # setup
    input = -7999999
    expected = "Hello, you just won 1.000.000$ for being the 1000th person to write: -7999999. Claim your prize today!'"

    # execute
    actual = shared_scammer_obj.get_scam_message(input)

    # verify
    assert actual == expected


def test_scam_message_with_empty_input(shared_scammer_obj):
    # setup
    input = ''
    expected = "Hello, you just won 1.000.000$ for being the 1000th person to write: . Claim your prize today!'"

    # execute
    actual = shared_scammer_obj.get_scam_message(input)

    # verify
    assert actual == expected


def test_scam_message_with_no_input(shared_scammer_obj):
    # setup
    input = None
    expected = "Hello, you just won 1.000.000$ for being the 1000th person to write: None. Claim your prize today!'"

    # execute
    actual = shared_scammer_obj.get_scam_message(input)

    # verify
    assert actual == expected
